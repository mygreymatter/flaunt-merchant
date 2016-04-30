//create an Index for the model in the mongo shell using the following command
//db.sizes.ensureIndex({men:1,women:1},{unique:true})
//men & women must be unique

//referred http://www.fashionara.com/guide

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId
    , sizeSchema = new Schema({
        by: {
            type: ObjectId
            , requied: true
        }
        , content: {
            type: String
            , required: true
        }
        , for: {
            type: ObjectId
            , requied: true
        }
    }, {
        autoIndex: false
    });

var Review = mongoose.model('Review', sizeSchema);

module.exports = Review;