const express=require("express");
const router=express.Router();

const Review=require("../models/Review");


// GET ALL REVIEWS

router.get("/",async(req,res)=>{

try{

const reviews=await Review.find();

res.status(200).json(reviews);


}
catch(error){

res.status(500).json({
message:error.message
});

}

});




// ADD REVIEW

router.post("/",async(req,res)=>{

try{


const review=await Review.create(req.body);


res.status(201).json({

message:"Review added successfully",
review

});


}
catch(error){

res.status(500).json({
message:error.message
});

}

});





// DELETE REVIEW

router.delete("/:id",async(req,res)=>{

try{

await Review.findByIdAndDelete(req.params.id);


res.json({
message:"Review deleted"
});


}
catch(error){

res.status(500).json({
message:error.message
});

}

});




module.exports=router;