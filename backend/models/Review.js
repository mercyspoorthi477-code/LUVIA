const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
{
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    productName:{
        type:String,
        required:true,
        trim:true
    },

    brand:{
        type:String,
        required:true,
        trim:true
    },

    category:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },

    review:{
        type:String,
        required:true
    },

    isSafe:{
        type:Boolean,
        default:true
    },

    productLink:{
        type:String,
        default:""
    },

    pros:{
        type:[String],
        default:[]
    },

    cons:{
        type:[String],
        default:[]
    }

},
{
    timestamps:true
});


module.exports = mongoose.model("Review",reviewSchema);