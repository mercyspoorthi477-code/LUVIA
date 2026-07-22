const mongoose = require("mongoose");

require("dotenv").config({
    path:"../.env"
});

const Review = require("../models/Review");


const USER_ID="6887a8f8eab8d3d90b5c7f31";


const reviews=[

{
userId:USER_ID,
productName:"Whisper Ultra Clean XL+",
brand:"Whisper",
category:"Sanitary Pads",
price:399,
rating:4.8,
review:"Excellent absorption and comfortable for overnight protection.",
isSafe:true,
productLink:"https://www.whisper.co.in/",
pros:[
"High absorption",
"Good leak protection",
"Easy availability"
],
cons:[
"Slightly thick"
]
},


{
userId:USER_ID,
productName:"Whisper Choice Wings XL",
brand:"Whisper",
category:"Sanitary Pads",
price:249,
rating:4.4,
review:"Affordable pad with good protection for normal flow.",
isSafe:true,
productLink:"https://www.whisper.co.in/",
pros:[
"Affordable",
"Available everywhere"
],
cons:[
"Not suitable for heavy flow"
]
},


{
userId:USER_ID,
productName:"Stayfree Secure XL",
brand:"Stayfree",
category:"Sanitary Pads",
price:280,
rating:4.5,
review:"Soft material and comfortable for everyday use.",
isSafe:true,
productLink:"https://www.stayfree.in/",
pros:[
"Soft surface",
"Budget friendly"
],
cons:[
"Average absorption"
]
},


{
userId:USER_ID,
productName:"Stayfree Advanced Dry Max",
brand:"Stayfree",
category:"Sanitary Pads",
price:350,
rating:4.6,
review:"Good dryness and suitable for overnight usage.",
isSafe:true,
productLink:"https://www.stayfree.in/",
pros:[
"Dry feeling",
"Good protection"
],
cons:[
"Plastic feel"
]
},


{
userId:USER_ID,
productName:"Sofy Bodyfit XL",
brand:"Sofy",
category:"Sanitary Pads",
price:350,
rating:4.6,
review:"Soft pads with comfortable fitting.",
isSafe:true,
productLink:"https://www.sofy.in/",
pros:[
"Soft",
"Comfortable fit"
],
cons:[
"Expensive"
]
},


{
userId:USER_ID,
productName:"Nua Ultra Thin Pads",
brand:"Nua",
category:"Organic Pads",
price:399,
rating:4.7,
review:"Ultra thin pads that feel lightweight and comfortable.",
isSafe:true,
productLink:"https://nuawoman.com/",
pros:[
"Ultra thin",
"Chemical free",
"Soft"
],
cons:[
"Premium price"
]
},


{
userId:USER_ID,
productName:"Sirona Natural Pads",
brand:"Sirona",
category:"Organic Pads",
price:299,
rating:4.4,
review:"Natural pads suitable for sensitive skin.",
isSafe:true,
productLink:"https://sironaindia.com/",
pros:[
"Skin friendly",
"Natural material"
],
cons:[
"Availability"
]
},


{
userId:USER_ID,
productName:"Carmesi Organic Cotton Pads",
brand:"Carmesi",
category:"Organic Pads",
price:349,
rating:4.6,
review:"Organic cotton pads with breathable comfort.",
isSafe:true,
productLink:"https://carmesi.com/",
pros:[
"Organic cotton",
"Breathable"
],
cons:[
"Costly"
]
},


{
userId:USER_ID,
productName:"Pee Safe Organic Pads",
brand:"Pee Safe",
category:"Organic Pads",
price:299,
rating:4.4,
review:"Plant based pads designed for sensitive skin.",
isSafe:true,
productLink:"https://peeesafe.com/",
pros:[
"Natural",
"Skin friendly"
],
cons:[
"Limited availability"
]
},


{
userId:USER_ID,
productName:"Rael Organic Cotton Pads",
brand:"Rael",
category:"Organic Pads",
price:599,
rating:4.7,
review:"Premium organic cotton pads with excellent comfort.",
isSafe:true,
productLink:"https://www.getrael.com/",
pros:[
"Premium quality",
"Very soft"
],
cons:[
"Very expensive"
]
},


{
userId:USER_ID,
productName:"Sirona Menstrual Cup",
brand:"Sirona",
category:"Menstrual Cups",
price:399,
rating:4.5,
review:"Reusable menstrual cup providing long-lasting protection.",
isSafe:true,
productLink:"https://sironaindia.com/",
pros:[
"Reusable",
"Eco friendly",
"Long usage"
],
cons:[
"Needs practice initially"
]
},


{
userId:USER_ID,
productName:"Carmesi Menstrual Cup",
brand:"Carmesi",
category:"Menstrual Cups",
price:499,
rating:4.6,
review:"Comfortable reusable menstrual cup.",
isSafe:true,
productLink:"https://carmesi.com/",
pros:[
"Reusable",
"Affordable"
],
cons:[
"Learning curve"
]
}

];



async function seedReviews(){

try{

await mongoose.connect(process.env.MONGO_URI);

console.log("MongoDB Connected");


await Review.deleteMany({});

console.log("Old reviews deleted");


await Review.insertMany(reviews);


console.log("New reviews added");


process.exit();

}
catch(error){

console.log(error);
process.exit();

}

}


seedReviews();