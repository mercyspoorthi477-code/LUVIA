const mongoose=require("mongoose");
const Review=require("./models/Review");

require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
.then(async()=>{


await Review.deleteMany();



await Review.insertMany([



{
productName:"Ultra Soft Sanitary Pads",
brand:"Nua",
category:"Pads",

image:"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",

rating:4.8,

reviewsCount:245,

safetyScore:"Dermatologically Tested",

price:299,

pros:[
"Very soft material",
"No irritation",
"Good absorption"
],

cons:[
"Bit expensive"
],

recommendation:
"Best for sensitive skin during heavy flow days",

review:
"Comfortable pads with good protection."
},




{
productName:"Menstrual Cup Medium",
brand:"Sirona",
category:"Menstrual Cups",

image:"https://images.unsplash.com/photo-1596464716127-f2a82984de30",

rating:4.6,

reviewsCount:180,

safetyScore:"Medical Grade Silicone",

price:399,

pros:[
"Eco friendly",
"Reusable",
"Long lasting"
],

cons:[
"Needs practice initially"
],

recommendation:
"Good choice for beginners",

review:
"Comfortable after learning usage."
},




{
productName:"Heating Pad For Period Pain",
brand:"Dr Trust",
category:"Wellness & Comfort",

image:"https://images.unsplash.com/photo-1515377905703-c4788e51af15",

rating:4.7,

reviewsCount:320,

safetyScore:"Certified Safe",

price:699,


pros:[
"Reduces cramps",
"Easy to use",
"Portable"
],


cons:[
"Requires charging"
],

recommendation:
"Useful during menstrual cramps",

review:
"Provides instant comfort during cramps."
}



]);


console.log("Reviews Added");


process.exit();


})
.catch(err=>{

console.log(err);

});