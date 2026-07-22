const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    summary:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },

    author:{
        type:String,
        default:"LUVIA Health Team"
    },

    readTime:{
        type:String,
        default:"5 min read"
    },

    date:{
        type:String,
        default:Date.now
    },

    image:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});


module.exports = mongoose.model(
    "Article",
    articleSchema
);