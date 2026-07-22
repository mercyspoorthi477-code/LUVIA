import React, { useState, useEffect } from "react";
import {
  Apple,
  Sparkles,
  Check,
  AlertCircle,
  Heart
} from "lucide-react";

import api from "../services/api";

import GlassCard from "../components/GlassCard";



const Diet = () => {


  const [dietItems,setDietItems] = useState([]);

  const [loading,setLoading] = useState(true);

  const [activeSymptom,setActiveSymptom] = useState("All");





  useEffect(()=>{


    fetchDiet();


  },[]);





  const fetchDiet = async()=>{


    try{


      const res = await api.get("/diet");


      console.log(
        "Diet Data:",
        res.data
      );


      setDietItems(
        res.data || []
      );


    }

    catch(error){


      console.log(
        "Diet loading error:",
        error
      );


    }

    finally{


      setLoading(false);


    }


  };







  const symptoms = [

    "All",

    ...new Set(
      dietItems.map(
        item=>item.symptom
      )
    )

  ];






  const filteredDiet =

  activeSymptom==="All"

  ?

  dietItems

  :

  dietItems.filter(
    item=>
    item.symptom===activeSymptom
  );









  if(loading){


    return(

      <div className="min-h-screen flex justify-center items-center text-white">

        Loading Diet Guide...

      </div>

    )

  }








return (

<div className="min-h-screen text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">





{/* HEADER */}



<div className="border-b border-white/10 pb-6">


<div className="flex items-center gap-2 text-cyan-300 text-xs uppercase">


<Apple size={16}/>


Moon Phase Nutrition Guide


</div>




<h1 className="text-4xl font-bold mt-3">

Hormone & Diet Guide

</h1>



<p className="text-slate-400 mt-2">

Foods recommended according to your symptoms and cycle health.

</p>



</div>









{/* FILTER */}



<div className="flex gap-3 overflow-x-auto">


{

symptoms.map((symptom)=>(


<button

key={symptom}

onClick={()=>setActiveSymptom(symptom)}

className={`px-4 py-2 rounded-full border text-sm

${
activeSymptom===symptom

?

"bg-cyan-400 text-black"

:

"bg-white/10 text-white"

}

`}

>


{symptom}


</button>


))

}


</div>









{/* CARDS */}



<div className="grid grid-cols-1 md:grid-cols-2 gap-8">



{


filteredDiet.length===0 && (


<GlassCard className="p-8">


<p className="text-center text-slate-300">

No diet recommendations found.

</p>


</GlassCard>


)


}








{

filteredDiet.map((item)=>(


<GlassCard

key={item._id}

accent="cyan"

className="p-6 space-y-5"

>



<div className="flex flex-col sm:flex-row gap-6">






<img

src={
item.image ||

"https://images.unsplash.com/photo-1498837167922-ddd27525d352"
}

alt={item.symptom}

className="w-full sm:w-44 h-44 object-cover rounded-2xl"

/>







<div className="space-y-4">


<span className="bg-pink-500/20 px-3 py-1 rounded-full text-xs">


{item.symptom}


</span>






<h2 className="text-2xl font-bold">


Foods For {item.symptom}


</h2>







<p className="text-slate-300">


{item.benefits}


</p>









<div className="flex flex-wrap gap-2">


{

item.food?.map((food,index)=>(


<span

key={index}

className="bg-white/10 px-3 py-1 rounded-xl text-sm"

>


{food}


</span>


))


}



</div>



</div>




</div>




</GlassCard>


))


}




</div>









{/* REFERENCE */}



<GlassCard className="p-8">


<h2 className="text-xl font-bold flex gap-2 items-center">


<Heart className="text-pink-400"/>


Nutrition Tips


</h2>



<div className="grid md:grid-cols-2 gap-5 mt-5">


<div className="bg-green-500/10 p-5 rounded-xl">


<h3 className="text-green-300 font-bold flex gap-2">


<Check size={18}/>

Foods To Include


</h3>



<p className="text-slate-300 mt-2">

Leafy greens, fruits, nuts, seeds, lentils and protein rich foods.

</p>


</div>





<div className="bg-red-500/10 p-5 rounded-xl">


<h3 className="text-red-300 font-bold flex gap-2">


<AlertCircle size={18}/>

Limit


</h3>



<p className="text-slate-300 mt-2">

Excess sugar, highly processed food and too much caffeine.

</p>


</div>


</div>


</GlassCard>






</div>


);



};



export default Diet;