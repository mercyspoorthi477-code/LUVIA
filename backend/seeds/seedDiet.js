const mongoose = require("mongoose");

require("dotenv").config();

const Diet = require("../models/Diet");


const diets = [

{
symptom:"Period Cramps",
food:[
"Banana",
"Dark Chocolate",
"Spinach",
"Warm Water",
"Ginger Tea"
],
benefits:"Magnesium and potassium rich foods may help relax muscles and reduce discomfort.",
image:"https://images.unsplash.com/photo-1481349518771-20055b2a7b24"
},

{
symptom:"Bloating",
food:[
"Cucumber",
"Yogurt",
"Green Tea",
"Watermelon",
"Peppermint Tea"
],
benefits:"Helps reduce water retention and supports digestion.",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
},

{
symptom:"Low Energy",
food:[
"Eggs",
"Dates",
"Oats",
"Peanuts",
"Almonds"
],
benefits:"Provides protein, iron, and healthy fats to improve energy levels.",
image:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea"
},

{
symptom:"Iron Deficiency",
food:[
"Beetroot",
"Spinach",
"Lentils",
"Ragi",
"Jaggery"
],
benefits:"Iron-rich foods support healthy blood levels and reduce fatigue.",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
},

{
symptom:"Mood Swings",
food:[
"Dark Chocolate",
"Walnuts",
"Banana",
"Avocado",
"Green Vegetables"
],
benefits:"Nutrients that support brain health and stable mood.",
image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352"
},

{
symptom:"PCOS Support",
food:[
"Broccoli",
"Flax Seeds",
"Chia Seeds",
"Fish",
"Whole Grains"
],
benefits:"Supports balanced nutrition and healthy lifestyle management for PCOS.",
image:"https://images.unsplash.com/photo-1540420773420-3366772f4999"
},

{
symptom:"Healthy Hormones",
food:[
"Sweet Potato",
"Eggs",
"Nuts",
"Olive Oil",
"Vegetables"
],
benefits:"Healthy fats and nutrients support overall hormonal wellness.",
image:"https://images.unsplash.com/photo-1490645935967-10de6ba17061"
},

{
symptom:"Skin Problems During Periods",
food:[
"Orange",
"Carrot",
"Tomato",
"Water",
"Green Tea"
],
benefits:"Antioxidant-rich foods support healthy skin.",
image:"https://images.unsplash.com/photo-1612817288484-6f916006741a"
},

{
symptom:"Stress",
food:[
"Chamomile Tea",
"Dark Chocolate",
"Pumpkin Seeds",
"Milk",
"Banana"
],
benefits:"Foods that support relaxation and emotional wellbeing.",
image:"https://images.unsplash.com/photo-1499209974431-9dddcece7f88"
},

{
symptom:"Healthy Weight Management",
food:[
"Oats",
"Vegetables",
"Fruits",
"Protein Foods",
"Seeds"
],
benefits:"Balanced foods support healthy lifestyle goals.",
image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
}

];


async function seedDiet(){

try{

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB Connected");


await Diet.deleteMany();

await Diet.insertMany(diets);


console.log("Diet data seeded successfully");


await mongoose.connection.close();

}

catch(error){

console.log("Seed Error:",error);

}

}


seedDiet();