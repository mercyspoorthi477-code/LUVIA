const mongoose = require("mongoose");

require("dotenv").config({
    path: "./.env"
});

const Article = require("../models/Article");


const articles = [

{
title:"Understanding Your Menstrual Cycle",
category:"Periods",

summary:
"Learn about menstrual cycle phases, hormones, ovulation and how tracking helps you understand your body.",

content:
`The menstrual cycle is a natural process that happens because of changes in hormones inside the body. Understanding your cycle helps you recognize patterns, manage symptoms, and take better care of your health.

A menstrual cycle usually has four main phases: menstrual phase, follicular phase, ovulation phase, and luteal phase.

During the menstrual phase, the uterus sheds its inner lining, which causes menstrual bleeding. This usually lasts between 3 to 7 days, although every person's experience can be different.

The follicular phase starts on the first day of menstruation and continues until ovulation. During this phase, hormones help an egg mature inside the ovary and prepare the body for possible pregnancy.

Ovulation usually happens around the middle of the cycle. During this time, an egg is released from the ovary. Some people notice changes such as increased energy, changes in mood, or mild abdominal discomfort.

The luteal phase happens after ovulation. Hormones prepare the body for a possible pregnancy. If pregnancy does not occur, hormone levels decrease and the next period begins.

Tracking your cycle can help you understand your normal patterns. Recording your period dates, mood changes, pain levels, sleep, and energy can help identify irregularities.

Maintaining a balanced diet, drinking enough water, exercising regularly, sleeping well, and managing stress are important for menstrual wellness.

If you experience severe pain, very heavy bleeding, missed periods, or sudden changes, consulting a healthcare professional is recommended.

LUVIA helps users track their cycles and understand their bodies through personalized health insights and reminders.`,

author:"Dr. LUVIA Wellness Team",

readTime:"8 min read",

date:"2026-07-20",

image:
"https://images.unsplash.com/photo-1505751172876-fa1923c5c528",

videoLink:
"https://www.youtube.com/results?search_query=menstrual+cycle+explained"

},



{
title:"PCOS Explained Simply",
category:"PCOS",

summary:
"Understand PCOS symptoms, causes and lifestyle management.",

content:
`Polycystic Ovary Syndrome, commonly known as PCOS, is one of the most common hormonal conditions affecting women of reproductive age.

PCOS happens when there is an imbalance in reproductive hormones. This imbalance can affect ovulation and may cause irregular periods, acne, weight changes, and increased hair growth.

Common symptoms of PCOS include irregular menstrual cycles, difficulty with weight management, oily skin, acne, hair thinning, and changes in mood.

The exact cause of PCOS is not completely understood, but genetics, insulin resistance, and hormonal factors can contribute to its development.

A healthy lifestyle plays an important role in managing PCOS. Regular physical activity can improve insulin sensitivity and support hormonal balance.

Eating a balanced diet containing vegetables, fruits, proteins, whole grains, and healthy fats can support overall health.

Stress management is also important because continuous stress can affect hormones and worsen symptoms.

Medical guidance is recommended for proper diagnosis and treatment. Doctors may suggest lifestyle changes, medicines, or other treatments depending on individual needs.

PCOS does not define a person's health or future. With awareness, proper care, and healthy habits, many people successfully manage PCOS and live healthy lives.`,

author:"LUVIA AI Health",

readTime:"8 min read",

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
`Menstrual hygiene is an important part of women's health. Following proper hygiene practices during periods helps prevent infections and keeps you comfortable.

Choosing suitable menstrual products such as pads, tampons, or menstrual cups depends on personal comfort and preference.

It is important to change menstrual products regularly. Keeping the body clean and washing hands before and after changing products reduces the risk of infections.

During periods, wearing comfortable cotton underwear, maintaining cleanliness, and staying hydrated can improve comfort.

Many people experience cramps, tiredness, or mood changes during menstruation. Gentle exercise, warm baths, and proper nutrition may help reduce discomfort.

Education about menstrual hygiene helps remove stigma and allows everyone to understand periods as a normal biological process.

LUVIA promotes awareness and provides information that helps users make informed health decisions.`,

author:"LUVIA Wellness",

readTime:"7 min read",

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
`Iron is an important mineral required for producing healthy red blood cells. Women may need more iron because menstrual bleeding can reduce iron levels.

Low iron levels may cause tiredness, weakness, dizziness, difficulty concentrating, and reduced energy.

Iron-rich foods include spinach, lentils, beans, chickpeas, nuts, seeds, eggs, fish, and lean meats.

Vitamin C helps the body absorb iron better, so eating foods like oranges, lemons, and other fruits along with iron-rich foods can be beneficial.

A balanced diet containing proteins, vitamins, minerals, and enough fluids supports overall wellness.

If someone experiences symptoms of iron deficiency, consulting a healthcare professional and getting proper tests is recommended.

Good nutrition is an important foundation for hormonal health and energy.`,

author:"LUVIA Nutrition",

readTime:"7 min read",

date:"2026-07-08",

image:
"https://images.unsplash.com/photo-1490645935967-10de6ba17061",

videoLink:
"https://www.youtube.com/results?search_query=iron+rich+foods"

},

{
title:"Why Do Periods Happen?",
category:"Periods",

summary:
"Understand the science behind menstruation and why the body prepares for every cycle.",

content:
`Periods are a natural biological process that occurs when the uterus releases its inner lining.

Every month, hormonal changes prepare the body for a possible pregnancy. The uterus develops a nutrient-rich lining that can support a pregnancy. If pregnancy does not happen, hormone levels decrease and the body removes this lining through menstruation.

The menstrual cycle is controlled by hormones such as estrogen and progesterone. These hormones influence periods, mood, energy levels, and physical changes.

Many people experience symptoms before or during periods, including cramps, bloating, mood changes, tiredness, and food cravings.

Understanding why periods happen helps reduce fear and misinformation. Periods are not an illness or something to feel embarrassed about. They are a normal sign that the reproductive system is functioning.

Maintaining good hygiene, tracking cycles, eating nutritious food, and listening to your body's signals are important parts of menstrual health.

If periods suddenly become irregular, extremely painful, or unusually heavy, seeking medical advice can help identify possible causes.`,

author:"LUVIA Health Team",

readTime:"7 min read",

date:"2026-07-18",

image:
"https://images.unsplash.com/photo-1576091160550-2173dba999ef"

},



{
title:"Irregular Periods: Causes and Solutions",
category:"Periods",

summary:
"Stress, lifestyle changes, PCOS and hormonal imbalance can affect your cycle.",

content:
`Irregular periods mean that menstrual cycles do not follow a predictable pattern. Some people may experience shorter cycles, longer cycles, missed periods, or changes in bleeding patterns.

Several factors can affect menstrual regularity. Stress, sudden weight changes, intense exercise, poor sleep, thyroid problems, and hormonal conditions like PCOS can influence periods.

Lifestyle habits play an important role in maintaining hormonal balance. Eating balanced meals, staying physically active, sleeping well, and managing stress can support a healthier cycle.

Tracking your periods using a health app can help identify patterns. Recording symptoms such as pain, mood changes, and flow can provide useful information for healthcare professionals.

Occasional changes can happen naturally, but continuous irregular periods should not be ignored.

A doctor can help identify the cause and suggest appropriate treatment based on individual health needs.

LUVIA helps users monitor their cycles and understand when changes may require attention.`,

author:"LUVIA Medical Guide",

readTime:"8 min read",

date:"2026-07-15",

image:
"https://images.unsplash.com/photo-1559757148-5c350d0d3c56"

},



{
title:"Exercise For Hormonal Health",
category:"Exercise",

summary:
"Discover workouts that support mood, energy and hormonal balance.",

content:
`Physical activity is an important part of maintaining hormonal health. Regular exercise supports better mood, energy levels, sleep quality, and overall wellbeing.

Different types of exercises provide different benefits. Walking is a simple activity that improves cardiovascular health and reduces stress.

Yoga and stretching exercises can help relax muscles, improve flexibility, and reduce stress-related symptoms.

Strength training helps build muscle, improve metabolism, and support healthy body composition.

Exercise also helps regulate hormones related to stress and mood. During physical activity, the body releases chemicals that improve emotional wellbeing.

However, excessive exercise without proper nutrition and rest may affect menstrual cycles. Balance is important.

A healthy exercise routine should include movement that you enjoy and can maintain consistently.

Combining exercise with proper nutrition and adequate sleep creates a strong foundation for long-term health.`,

author:"LUVIA Fitness",

readTime:"7 min read",

date:"2026-07-04",

image:
"https://images.unsplash.com/photo-1517836357463-d25dfeac3438"

},



{
title:"Managing Stress And Hormones",
category:"Mental Health",

summary:
"Stress affects hormones, sleep and menstrual cycles.",

content:
`Stress is a natural response of the body, but continuous stress can affect physical and emotional health.

When the body experiences stress, stress hormones increase. Long-term stress may influence sleep, mood, energy levels, and even menstrual cycles.

Common signs of stress include difficulty sleeping, feeling overwhelmed, changes in appetite, headaches, and mood changes.

Managing stress does not require removing every challenge from life. Instead, healthy coping methods can help the body respond better.

Practices such as meditation, deep breathing exercises, journaling, spending time in nature, and maintaining social connections can support mental wellness.

Good sleep is also essential for hormone regulation. Creating a regular sleep schedule helps the body recover and maintain balance.

Mental health is an important part of overall health. Taking care of emotions and stress levels helps support physical wellbeing too.

LUVIA encourages users to include self-care routines along with period tracking for complete wellness.`,

author:"LUVIA Mental Wellness",

readTime:"8 min read",

date:"2026-07-02",

image:
"https://images.unsplash.com/photo-1499209974431-9dddcece7f88"

},



{
title:"Self Care During Periods",
category:"Mental Health",

summary:
"Simple self-care practices to feel comfortable and supported during menstruation.",

content:
`Periods can bring physical and emotional changes. Practicing self-care during this time helps improve comfort and wellbeing.

Getting enough rest, drinking water, eating nutritious meals, and using comfortable menstrual products can make periods easier to manage.

Warm baths, heating pads, gentle stretching, and relaxing activities may help reduce discomfort.

Emotional changes during periods are common because hormones influence mood. Being kind to yourself and allowing time to rest is important.

Self-care is not only about physical comfort. It also includes managing emotions, reducing stress, and taking breaks when needed.

Every person's period experience is different. Understanding your own body helps you create a routine that works best for you.`,

author:"LUVIA Wellness",

readTime:"6 min read",

date:"2026-06-30",

image:
"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"

},



{
title:"Hormonal Balance And Healthy Lifestyle",
category:"Nutrition",

summary:
"Learn how daily habits influence hormones and overall wellness.",

content:
`Hormones control many important functions in the body including metabolism, mood, reproduction, sleep, and energy.

Maintaining hormonal balance requires a combination of healthy habits rather than a single solution.

Eating a balanced diet with proteins, healthy fats, vegetables, fruits, and whole grains provides nutrients needed for hormone production.

Sleep plays a major role in regulating hormones. Poor sleep can affect stress hormones and energy levels.

Regular physical activity improves circulation, metabolism, and emotional wellbeing.

Reducing excessive stress through relaxation techniques, hobbies, and self-care can support hormonal health.

Small daily habits create long-term improvements. Listening to your body and maintaining consistency are key parts of wellness.

LUVIA combines health tracking and education to help users make better lifestyle choices.`,

author:"LUVIA Health Team",

readTime:"8 min read",

date:"2026-06-28",

image:
"https://images.unsplash.com/photo-1498837167922-ddd27525d352"

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