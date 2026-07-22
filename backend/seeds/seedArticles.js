const mongoose = require("mongoose");

require("dotenv").config({
    path: "../.env"
});

const Article = require("../models/Article");


const articles = [

{
title:"Understanding Your Menstrual Cycle",
category:"Periods",

summary:
"Learn about menstrual cycle phases, hormones, ovulation and how tracking helps you understand your body.",

content:
"The menstrual cycle has four major phases: menstrual, follicular, ovulation and luteal phase. Each phase affects hormones, mood, energy and physical changes. Tracking your cycle helps identify patterns and improves self awareness.",

author:"Dr. LUVIA Wellness Team",

readTime:"5 min read",

date:"2026-07-20",

image:
"https://images.unsplash.com/photo-1505751172876-fa1923c5c528",

videoLink:
"https://www.youtube.com/results?search_query=menstrual+cycle+explained"

},



{
title:"Why Do Periods Happen?",

category:"Periods",

summary:
"Understand the science behind menstruation and why the body prepares for every cycle.",

content:
"Periods happen when the uterus sheds its lining because pregnancy has not occurred. Hormonal changes control this natural process.",

author:"LUVIA Health",

readTime:"4 min read",

date:"2026-07-18",

image:
"https://images.unsplash.com/photo-1576091160550-2173dba999ef",

videoLink:
"https://www.youtube.com/results?search_query=why+do+periods+happen"

},



{
title:"Irregular Periods: Causes and Solutions",

category:"Periods",

summary:
"Stress, lifestyle changes, PCOS and hormonal imbalance can affect your cycle.",

content:
"Irregular periods may happen due to stress, weight changes, excessive exercise, thyroid issues or PCOS. Maintaining healthy habits and consulting doctors when needed is important.",

author:"LUVIA Medical Guide",

readTime:"6 min read",

date:"2026-07-15",

image:
"https://images.unsplash.com/photo-1559757148-5c350d0d3c56",

videoLink:
"https://www.youtube.com/results?search_query=irregular+periods+causes"

},



{
title:"PCOS Explained Simply",

category:"PCOS",

summary:
"Understand PCOS symptoms, causes and lifestyle management.",

content:
"PCOS is a hormonal condition that can affect periods, skin, weight and fertility. Exercise, balanced nutrition and medical guidance can help manage symptoms.",

author:"LUVIA AI Health",

readTime:"7 min read",

date:"2026-07-12",

image:
"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",

videoLink:
"https://www.youtube.com/results?search_query=PCOS+explained"

},



{
title:"Menstrual Hygiene Basics",

category:"Menstrual Hygiene",

summary:
"Essential hygiene practices to stay comfortable and healthy during periods.",

content:
"Changing menstrual products regularly, maintaining cleanliness and choosing comfortable products are important parts of menstrual hygiene.",

author:"LUVIA Wellness",

readTime:"5 min read",

date:"2026-07-10",

image:
"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",

videoLink:
"https://www.youtube.com/results?search_query=menstrual+hygiene"

},



{
title:"Iron Rich Foods For Women",

category:"Nutrition",

summary:
"Foods rich in iron help maintain energy and support women's health.",

content:
"Iron rich foods include spinach, lentils, beans, nuts, seeds and meat. Vitamin C improves iron absorption.",

author:"LUVIA Nutrition",

readTime:"4 min read",

date:"2026-07-08",

image:
"https://images.unsplash.com/photo-1490645935967-10de6ba17061",

videoLink:
"https://www.youtube.com/results?search_query=iron+rich+foods"

},



{
title:"Nutrition During Periods",

category:"Nutrition",

summary:
"Foods that may help with cramps, fatigue and hormonal changes.",

content:
"During periods focus on hydration, iron rich foods, magnesium sources, fruits, vegetables and balanced meals.",

author:"LUVIA Nutrition",

readTime:"5 min read",

date:"2026-07-06",

image:
"https://images.unsplash.com/photo-1542838132-92c53300491e",

videoLink:
"https://www.youtube.com/results?search_query=nutrition+during+periods"

},



{
title:"Exercise For Hormonal Health",

category:"Exercise",

summary:
"Discover workouts that support mood, energy and hormonal balance.",

content:
"Walking, yoga, strength training and stretching can improve mood and support overall wellness.",

author:"LUVIA Fitness",

readTime:"5 min read",

date:"2026-07-04",

image:
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438",

videoLink:
"https://www.youtube.com/results?search_query=exercise+for+hormonal+health"

},



{
title:"Managing Stress And Hormones",

category:"Mental Health",

summary:
"Stress affects hormones, sleep and menstrual cycles.",

content:
"Meditation, proper sleep, breathing exercises and healthy routines help manage stress levels.",

author:"LUVIA Mental Wellness",

readTime:"6 min read",

date:"2026-07-02",

image:
"https://images.unsplash.com/photo-1499209974431-9dddcece7f88",

videoLink:
"https://www.youtube.com/results?search_query=stress+and+hormones"

}



];





async function seedArticles(){

try{


await mongoose.connect(process.env.MONGO_URI);


console.log("MongoDB Connected");



await Article.deleteMany();


await Article.insertMany(articles);



console.log("Articles seeded successfully");



await mongoose.connection.close();



}

catch(error){

console.log("Seed Error:",error);

}


}



seedArticles();