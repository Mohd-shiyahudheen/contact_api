const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    pinCode:{
        type: Number,
        required: true
    }

})
 
const Contact = mongoose.model('Contact',ContactSchema)

module.exports=Contact