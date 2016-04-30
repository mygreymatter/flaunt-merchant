var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    areaSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        license: {
            type: String,
            required: true
        },
        date_of_establishment: {
            type: Date,
            required: true
        },
        landmark: {
            type: String
        },
        area: {
            type: ObjectId,
            required: true
        },
        business_type: {
            type: [String],
            required: true
        }
    }, {
        autoIndex: false
    });

areaSchema.methods.getArrayFromString = function (s) {
    s = s.replace(/'/g, '"');
    return JSON.parse(s);
};

var Store = mongoose.model('Store', areaSchema);

module.exports = Store;
