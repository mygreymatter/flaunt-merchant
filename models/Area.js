//create an Index for the model in the mongo shell using the following command
//db.areas.ensureIndex({name:1},{unique:true})
//name must be unique

//pincode need not be unique. Since two areas may share the same pincode.
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    areaSchema = new Schema({
        name: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        pincode: {
            type: Number,
            required: true
        }
    }, {
        autoIndex: false
    });

var Area = mongoose.model('Area', areaSchema);

module.exports = Area;
