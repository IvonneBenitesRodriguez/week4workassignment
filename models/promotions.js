const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
    },
    cost:{
        type: Currency,
        min: 0,
        required:true
    },
    description:{
        type: String,
        required: true
    }
},
{
    timestamps: true

});
//creating a model
const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;