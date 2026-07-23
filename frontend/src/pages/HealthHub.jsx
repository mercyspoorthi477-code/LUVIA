import React,{useState,useEffect} from "react";

import {
BookOpen,
Search,
Clock,
User,
X
} from "lucide-react";

import {motion,AnimatePresence} from "framer-motion";

import api from "../services/api";

import GlassCard from "../components/GlassCard";

import Button from "../components/Button";

import HealthStats from "../components/HealthStats";

const HealthHub=()=>{

const [articles,setArticles]=useState([]);

const [category,setCategory]=useState("All");

const [search,setSearch]=useState("");

const [selected,setSelected]=useState(null);

const categories=[
"All",
"Periods",
"PCOS",
"Nutrition",
"Exercise",
"Mental Health"
];

useEffect(()=>{

api.get("/article/all")

.then(res=>{

setArticles(res.data);

})

.catch(err=>{

console.log(err);

});

},[]);

const filtered=articles.filter(a=>{

return (

(category==="All"||a.category===category)

&&

(
a.title.toLowerCase()
.includes(search.toLowerCase())

||

a.summary.toLowerCase()
.includes(search.toLowerCase())

)

);

});

return(

<div className="min-h-screen text-white pt-24 px-6 pb-16">

<div className="max-w-7xl mx-auto space-y-8">

<h1 className="text-4xl font-bold flex gap-3">

<BookOpen/>

<HealthStats totalArticles={filtered.length}/>

Health & Hormone Hub

</h1>

<input

className="w-full p-3 rounded-xl bg-white/10"

placeholder="Search health topics..."

value={search}

onChange={
e=>setSearch(e.target.value)
}

/>

<div className="flex gap-3 flex-wrap">

{
categories.map(c=>(

<button

key={c}

onClick={()=>setCategory(c)}

className={`px-4 py-2 rounded-full ${
category===c
?
"bg-purple-500"
:
"bg-white/10"
}`}

>

{c}

</button>

))

}

</div>

<div className="grid md:grid-cols-3 gap-6">

{
filtered.map(article=>(

<GlassCard

key={article._id}

className="overflow-hidden"

>

<img

src={article.image}

className="h-48 w-full object-cover"

/>

<div className="p-5 space-y-3">

<p className="text-cyan-300 text-sm">

{article.category}

</p>

<h2 className="text-xl font-bold">

{article.title}

</h2>

<p className="text-gray-300 text-sm">

{article.summary}

</p>

<Button

onClick={()=>setSelected(article)}

>

Read More

</Button>

</div>

</GlassCard>

))

}

</div>

<AnimatePresence>

{
selected &&

<motion.div

className="fixed inset-0 bg-black/80 flex items-center justify-center p-5"

>

<div className="bg-gray-900 p-8 rounded-3xl max-w-3xl">

<button

onClick={()=>setSelected(null)}

>

<X/>

</button>

<h2 className="text-3xl font-bold">

{selected.title}

</h2>

<p className="mt-5 text-gray-300 whitespace-pre-line">

{selected.content}

</p>

</div>

</motion.div>

}

</AnimatePresence>

</div>

</div>

);

};

export default HealthHub;