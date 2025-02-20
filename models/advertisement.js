const mongoose = require("mongoose");

const ads = new mongoose.Schema({
    adsname:{
        type:String,
        require:true
    },
    fdate:{
        type:String
    },
    tdate:{
        type:String
    },
    stime:{
        type:String
    },
    etime:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    adsImg:{
        type:String
    }
},{
    timestamps: true // Adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Ads",ads);