//create an Index for the model in the mongo shell using the following command
//db.sizes.ensureIndex({men:1,women:1},{unique:true})
//men & women must be unique

//referred http://www.fashionara.com/guide

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    sizeSchema = new Schema({
        product: {
            type: ObjectId,
            required: true
        },
        merchant: {
            type: ObjectId,
            required: true
        },
        store: {
            type: ObjectId,
            required: true
        },
        user: {
            type: ObjectId,
            required: true
        },
        visited_on: {
            type: Date,
            required: true
        }
    }, {
        autoIndex: false
    });

var Visitor = mongoose.model('Visitor', sizeSchema);

module.exports = Visitor;
