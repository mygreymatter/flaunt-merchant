//create an Index for the model in the mongo shell using the following command
//db.sizes.ensureIndex({men:1,women:1},{unique:true})
//men & women must be unique

//referred http://www.fashionara.com/guide

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    sizeSchema = new Schema({
        by_user: {
            type: ObjectId,
            requied: true
        },
        quantity: {
            type: Number,
            requied: true
        },
        payment: {
            mode: {
                type: String,
                required: true
            },
            paid: {
                type: Boolean,
                requied: true
            }
        },
        status: {
            type: String,
            requied: true
        },
        for_product: {
            type: ObjectId,
            requied: true
        },
        created_at: {
            type: Date,
            required: true
        },
        updated_at: {
            type: Date,
            required: true
        }
    }, {
        autoIndex: false
    });

var Order = mongoose.model('Order', sizeSchema);

module.exports = Order;
