var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    crypto = require('crypto'),
    jwt = require('jsonwebtoken'),
    Schema = mongoose.Schema,
    merchantSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true
        },
        hash: String,
        salt: String

    });

merchantSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

merchantSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSalt(8), null);
};

merchantSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return /*bcrypt.compareSync(password,this.password)*/ this.hash === hash;
};

merchantSchema.methods.generateJWT = function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000)
    }, 'SECRET');
};


module.exports = mongoose.model('Merchant', merchantSchema);
