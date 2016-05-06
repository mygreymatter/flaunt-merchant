//create an Index for the model in the mongo shell using the following command
//db.storess.ensureIndex({license:1},{unique:true})
//license must be unique
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
        area_id: {
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

var Store = mongoose.model('Store', areaSchema);

module.exports = Store;
