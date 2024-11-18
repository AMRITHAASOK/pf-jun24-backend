const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
       
    },
    linkedIn:{
        type:String,
        
    },
    profilePic:{
        type:String,
        
    }

})

const users = mongoose.model('users',userSchema)
module.exports =users