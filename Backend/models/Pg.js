const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema({

    pgName:{
        type:String,
        required:true
    },
    pg_image:{
        type:String,
        required:true
    },

    ownerName:{
        type:String,
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    rent:{
        type:Number,
        required:true
    },

    facilities:{
        type:String
    },

    image:{
        type:String
    }

});

module.exports =
mongoose.model(
"Pg",
pgSchema
);