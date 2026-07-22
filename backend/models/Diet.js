const mongoose = require("mongoose");


const dietSchema = new mongoose.Schema(

{

    symptom:{

        type:String,

        required:true,

        trim:true

    },



    food:{

        type:[String],

        required:true

    },



    benefits:{

        type:String,

        required:true,

        trim:true

    },



    image:{

        type:String,

        default:""

    }


},


{

timestamps:true

}


);



module.exports = mongoose.model(
    "Diet",
    dietSchema
);