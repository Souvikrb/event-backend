const mongoose = require("mongoose");

const notification = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    link:{
        type:String
    }
},{
    timestamps: true // Adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Notification",notification);