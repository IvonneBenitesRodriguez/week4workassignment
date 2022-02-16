const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({ 
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        required: false
    }
},
    {
   timestamps: true  
});

// creating a model
const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;
