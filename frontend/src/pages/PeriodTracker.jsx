import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  CalendarDays,
  Heart,
  X
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import API from "../services/api";

import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import InputField from "../components/InputField";



const PeriodTracker = () => {


  const { user, updateCycleData } = useAuth();


  const [periods, setPeriods] = useState([]);

  const [loading, setLoading] = useState(true);


  const [currentDate, setCurrentDate] = useState(
    new Date()
  );


  const [modalOpen, setModalOpen] = useState(false);



  const [formData, setFormData] = useState({

    startDate:"",
    endDate:"",
    mood:"Happy",
    flow:"Medium",
    notes:""

  });



  const [selectedSymptoms,setSelectedSymptoms] = useState([]);



  const symptoms = [
    "Cramps",
    "Bloating",
    "Headache",
    "Fatigue",
    "Acne",
    "Cravings"
  ];





  useEffect(()=>{

    fetchPeriods();

  },[]);






  const fetchPeriods = async()=>{


    try{


      const id = user?._id || user?.id;


      if(!id){

        setLoading(false);
        return;

      }



      const res = await API.get(
        `/period/${id}`
      );


      setPeriods(res.data);



    }
    catch(err){

      console.log(err);

    }
    finally{

      setLoading(false);

    }


  };








  const handleSavePeriod = async(e)=>{


    e.preventDefault();



    try{


      const data={


        user:user._id || user.id,


        startDate:formData.startDate,


        endDate:formData.endDate,


        mood:formData.mood,


        flow:formData.flow,


        notes:formData.notes,


        symptoms:selectedSymptoms



      };




      await API.post(
        "/period",
        data
      );




      updateCycleData({

        lastPeriodDate:
        formData.startDate

      });





      setModalOpen(false);



      setFormData({

        startDate:"",
        endDate:"",
        mood:"Happy",
        flow:"Medium",
        notes:""

      });



      setSelectedSymptoms([]);

      fetchPeriods();



    }
    catch(err){

      console.log(err);

    }


  };









  const toggleSymptom=(item)=>{


    setSelectedSymptoms(prev=>


      prev.includes(item)

      ?

      prev.filter(
        x=>x!==item
      )

      :

      [...prev,item]


    );


  };








  // Calculate cycle phase


  const getPhase=(date)=>{


    for(let cycle of periods){



      const start =
      new Date(cycle.startDate);



      const current =
      new Date(date);



      const difference =
      Math.floor(

        (current-start)

        /

        (1000*60*60*24)

      );





      if(
        difference>=0 &&
        difference<=5
      ){

        return "period";

      }





      if(
        difference>5 &&
        difference<=13
      ){

        return "follicular";

      }





      if(
        difference>13 &&
        difference<=16
      ){

        return "ovulation";

      }





      if(
        difference>16 &&
        difference<=28
      ){

        return "luteal";

      }



    }



    return "";

  };







  const daysInMonth =
  new Date(

    currentDate.getFullYear(),

    currentDate.getMonth()+1,

    0

  ).getDate();







  const changeMonth=(value)=>{


    setCurrentDate(

      new Date(

        currentDate.getFullYear(),

        currentDate.getMonth()+value,

        1

      )

    );


  };





  if(loading){


    return(

      <div className="
      min-h-screen
      flex
      justify-center
      items-center
      text-white
      ">

        Loading...

      </div>

    );

  }







  return (

<div className="
min-h-screen
text-white
pt-24
pb-16
px-4
max-w-7xl
mx-auto
space-y-8
">



<div className="
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
">



<div>


<h1 className="
text-4xl
font-bold
">

Period Tracker 🌙

</h1>



<p className="
text-slate-400
mt-2
">

Track your cycle, monitor symptoms, and stay informed about your reproductive health.

</p>


</div>





<Button

icon={Plus}

onClick={()=>setModalOpen(true)}

>

Log Period

</Button>



</div>
{/* CALENDAR */}

<GlassCard className="p-8">


<div className="
flex
justify-between
items-center
mb-6
">


<Button

variant="glass"

icon={ChevronLeft}

onClick={()=>changeMonth(-1)}

/>



<h2 className="
text-2xl
font-bold
">

{

currentDate.toLocaleString(
"default",
{
month:"long",
year:"numeric"
}
)

}

</h2>



<Button

variant="glass"

icon={ChevronRight}

onClick={()=>changeMonth(1)}

/>


</div>






<div className="
grid
grid-cols-7
gap-3
mb-3
text-center
text-slate-400
">


{

["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

.map(day=>(

<div key={day}>

{day}

</div>

))

}


</div>







<div className="
grid
grid-cols-7
gap-3
">


{

Array.from({

length:daysInMonth

}).map((_,index)=>{


const day=index+1;



const date=new Date(

currentDate.getFullYear(),

currentDate.getMonth(),

day

);



const phase=getPhase(date);




let style="bg-white/5";



if(phase==="period")
style="bg-pink-500 shadow-lg";



if(phase==="follicular")
style="bg-green-500";



if(phase==="ovulation")
style="bg-cyan-500 text-black";



if(phase==="luteal")
style="bg-purple-500";




return(


<motion.div

key={day}

whileHover={{
scale:1.05
}}

className={`
h-14
rounded-xl
flex
items-center
justify-center
font-semibold
transition
${style}
`}

>


{day}


</motion.div>



)



})


}


</div>






<div className="
flex
flex-wrap
gap-3
mt-6
text-xs
">


<span className="
bg-pink-500
px-3
py-1
rounded-full
">

Menstrual

</span>



<span className="
bg-green-500
px-3
py-1
rounded-full
">

Follicular

</span>




<span className="
bg-cyan-500
text-black
px-3
py-1
rounded-full
">

Ovulation

</span>




<span className="
bg-purple-500
px-3
py-1
rounded-full
">

Luteal

</span>



</div>



</GlassCard>










{/* HISTORY */}


<div className="space-y-5">


<h2 className="
text-2xl
font-bold
flex
items-center
gap-2
">

<Heart
className="text-pink-400"
/>

Previous Cycles

</h2>





{

periods.length===0 &&


<GlassCard className="p-5">

<p className="text-slate-400">

No periods logged yet.

</p>

</GlassCard>


}






{

periods.map(period=>(


<GlassCard

key={period._id}

className="p-6 space-y-4"

>



<div className="
flex
justify-between
items-center
">


<div>


<h3 className="
text-lg
font-bold
">


<CalendarDays

size={18}

className="inline mr-2"

/>



{

new Date(period.startDate)

.toLocaleDateString()

}


&nbsp; -

&nbsp;


{

new Date(period.endDate)

.toLocaleDateString()

}


</h3>



<p className="
text-slate-400
">

Mood : {period.mood}

</p>


</div>




<span className="
bg-pink-500/20
px-4
py-2
rounded-full
">

{period.flow}

</span>



</div>







<div className="
flex
flex-wrap
gap-2
">


{

period.symptoms?.map(symptom=>(


<span

key={symptom}

className="
bg-purple-500/20
px-3
py-1
rounded-full
text-sm
"

>

{symptom}

</span>


))


}


</div>





{

period.notes &&


<p className="
text-slate-300
">

{period.notes}

</p>


}





</GlassCard>


))


}



</div>









{/* MODAL */}



{

modalOpen &&


<div className="
fixed
inset-0
z-50
bg-black/70
backdrop-blur-sm
flex
items-center
justify-center
p-5
">



<GlassCard className="
w-full
max-w-xl
p-8
relative
">


<button

onClick={()=>setModalOpen(false)}

className="
absolute
right-5
top-5
bg-white/10
p-2
rounded-full
"

>

<X/>

</button>





<h2 className="
text-3xl
font-bold
mb-6
">

Log New Period

</h2>







<form

onSubmit={handleSavePeriod}

className="
space-y-5
"

>



<InputField

label="Start Date"

type="date"

value={formData.startDate}

onChange={(e)=>

setFormData({

...formData,

startDate:e.target.value

})

}

/>





<InputField

label="End Date"

type="date"

value={formData.endDate}

onChange={(e)=>

setFormData({

...formData,

endDate:e.target.value

})

}

/>






<div>


<label>

Mood

</label>


<select

className="
w-full
bg-white/10
rounded-xl
p-3
mt-2
"

value={formData.mood}

onChange={(e)=>

setFormData({

...formData,

mood:e.target.value

})

}

>


<option>

Happy

</option>


<option>

Sad

</option>


<option>

Calm

</option>


<option>

Stressed

</option>


<option>

Emotional

</option>



</select>


</div>







<div>


<label>

Flow

</label>


<select

className="
w-full
bg-white/10
rounded-xl
p-3
mt-2
"

value={formData.flow}

onChange={(e)=>

setFormData({

...formData,

flow:e.target.value

})

}

>


<option>

Light

</option>


<option>

Medium

</option>


<option>

Heavy

</option>


</select>


</div>








<div>


<label>

Symptoms

</label>



<div className="
flex
flex-wrap
gap-2
mt-3
">


{

symptoms.map(item=>(


<button

type="button"

key={item}

onClick={()=>toggleSymptom(item)}

className={`

px-3
py-2
rounded-full

${

selectedSymptoms.includes(item)

?

"bg-pink-500"

:

"bg-white/10"

}

`}

>


{item}


</button>



))


}


</div>


</div>







<textarea

rows="4"

placeholder="Notes"

className="
w-full
bg-white/10
rounded-xl
p-3
"

value={formData.notes}

onChange={(e)=>

setFormData({

...formData,

notes:e.target.value

})

}

/>







<Button

type="submit"

fullWidth

>

Save Period

</Button>





<Button

type="button"

variant="glass"

fullWidth

onClick={()=>setModalOpen(false)}

>

Cancel

</Button>




</form>




</GlassCard>



</div>


}





</div>


);

};


export default PeriodTracker;