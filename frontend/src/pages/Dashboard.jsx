import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Calendar,
  Smile,
  Apple,
  Bell,
  Sparkles,
  ArrowRight,
  PlusCircle,
  Activity
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import api from "../services/api";

import MoonAnimation from "../components/MoonAnimation";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";


const Dashboard = () => {

  const { user } = useAuth();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const fetchDashboard = async()=>{

      try{

        const res = await api.get(
          `/dashboard/${user.id}`
        );

        setDashboardData(res.data);

      }
      catch(error){

        console.log(
          "Dashboard Error:",
          error.message
        );

      }
      finally{

        setLoading(false);

      }

    };


    if(user?.id){

      fetchDashboard();

    }
    else{

      setLoading(false);

    }


  },[user]);




  if(loading){

    return(

      <div className="
      min-h-screen
      flex
      items-center
      justify-center
      text-white
      ">

        Loading your lunar health 🌙

      </div>

    );

  }



  const backendUser =
    dashboardData?.user || user;



  const prediction =
    dashboardData?.prediction;



  const name =
    backendUser?.name || "Luna";



  const cycleLength =
    backendUser?.cycleLength || 28;



  const lastPeriod =
    backendUser?.lastPeriodDate;



  let cycleDay = 0;


  if(lastPeriod){

    const start =
      new Date(lastPeriod);


    const today =
      new Date();


    cycleDay =
      Math.floor(
        (today-start)/(1000*60*60*24)
      ) + 1;

  }



  let phase =
    "Not tracked";


  if(cycleDay <= 5){

    phase="Menstrual Phase";

  }
  else if(cycleDay <=14){

    phase="Follicular Phase";

  }
  else if(cycleDay <=17){

    phase="Ovulatory Phase";

  }
  else{

    phase="Luteal Phase";

  }




  const nextPeriod =
    prediction?.nextPeriod
    ? new Date(
        prediction.nextPeriod
      ).toLocaleDateString(
        "en-US",
        {
          month:"short",
          day:"numeric",
          year:"numeric"
        }
      )
    :"Not available";




  const daysUntilNextPeriod =
    prediction?.nextPeriod
    ?
    Math.ceil(
      (
      new Date(prediction.nextPeriod)
      -
      new Date()
      )
      /
      (1000*60*60*24)
    )
    :
    cycleLength-cycleDay;



  const healthScore = 88;



  return (

<div className="
min-h-screen
text-white
pt-24
pb-16
px-4
sm:px-6
lg:px-8
max-w-7xl
mx-auto
space-y-8
">


<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
flex
flex-col
sm:flex-row
justify-between
gap-4
border-b
border-white/10
pb-6
"


>


<div>


<div className="
flex
items-center
gap-2
text-xs
font-bold
text-[#67E8F9]
uppercase
tracking-widest
">

<Sparkles size={15}/>

Lunar Alignment Active

</div>



<h1 className="
font-display
text-4xl
font-extrabold
mt-2
">

Welcome Back,

<span className="
text-gradient-lunar
">

 {name}

</span>

✨


</h1>



<p className="
text-sm
text-[#CBD5E1]
mt-2
">

Your cycle is on Day {cycleDay}

(
{phase}
)

</p>


</div>




<div className="
flex
gap-3
">


<Link to="/tracker">

<Button
variant="primary"
icon={Calendar}
>

Log Cycle Entry

</Button>

</Link>



<Link to="/mood">

<Button
variant="glass"
icon={Smile}
>

Mood

</Button>

</Link>


</div>



</motion.div>





<GlassCard
accent="lunar"
className="p-8"
>


<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
items-center
">


<div className="
flex
justify-center
">


<MoonAnimation

cycleDay={cycleDay}

phase={phase}

healthScore={healthScore}

size="large"

/>


</div>





<div className="space-y-6">


<div>


<p className="
text-xs
text-[#F9A8D4]
uppercase
font-bold
">

Current Phase

</p>


<h2 className="
font-display
text-3xl
font-bold
">

{phase}

</h2>


</div>



<div className="
grid
grid-cols-2
gap-4
">


<div className="
p-4
rounded-2xl
bg-white/5
border
border-white/10
">

<p className="text-xs text-gray-300">

Next Period

</p>


<h3 className="
text-3xl
font-bold
text-[#67E8F9]
">

{daysUntilNextPeriod}

</h3>


<p className="text-xs">

{nextPeriod}

</p>


</div>





<div className="
p-4
rounded-2xl
bg-white/5
border
border-white/10
">

<p className="text-xs text-gray-300">

Health Score

</p>


<h3 className="
text-3xl
font-bold
text-[#F9A8D4]
">

{healthScore}%

</h3>


</div>



</div>



</div>



</div>


</GlassCard>


// ================= QUICK CARDS =================


<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-6
">



<GlassCard accent="rose">

<div className="space-y-4">


<div className="
flex
justify-between
items-center
">

<h3 className="
flex
items-center
gap-2
font-bold
">

<Smile size={18}/>

Mood Today

</h3>


</div>



<p className="
text-sm
text-gray-300
">

No mood recorded yet.

</p>



<Link to="/mood">

<Button
icon={PlusCircle}
variant="glass"
>

Update Mood

</Button>

</Link>



</div>

</GlassCard>





<GlassCard accent="lunar">


<div className="space-y-4">


<h3 className="
flex
items-center
gap-2
font-bold
">

<Activity size={18}/>

Symptoms

</h3>



<p className="
text-sm
text-gray-300
">

Track cramps, pain, energy and symptoms from your tracker.

</p>



<Link to="/tracker">

<Button
variant="glass"
>

Log Symptoms

</Button>

</Link>


</div>


</GlassCard>






<GlassCard accent="cyan">


<div className="space-y-4">


<h3 className="
flex
items-center
gap-2
font-bold
">

<Apple size={18}/>

Nutrition

</h3>



<p className="
text-sm
text-gray-300
">

{
dashboardData?.diet?.length
?
dashboardData.diet
.slice(0,3)
.join(", ")
:
"No diet suggestions yet"
}

</p>




<Link to="/diet">

<Button
icon={ArrowRight}
variant="glass"
>

View Diet

</Button>

</Link>


</div>


</GlassCard>








<GlassCard accent="lunar">


<div className="space-y-4">


<h3 className="
flex
items-center
gap-2
font-bold
">

<Bell size={18}/>

Notifications

</h3>




<p className="
text-sm
text-gray-300
">

{
dashboardData?.notifications?.length
||
0
}

 active reminders

</p>




<Link to="/notifications">


<Button
icon={ArrowRight}
variant="glass"
>

Open Hub

</Button>


</Link>



</div>



</GlassCard>




</div>





{/* HEALTH FACTS */}


<GlassCard>


<div className="space-y-3">


<h3 className="
font-display
text-2xl
font-bold
">

🌙 Today's Wellness Facts

</h3>



<ul className="
space-y-2
text-sm
text-gray-300
">


{
dashboardData?.facts?.map(
(fact,index)=>(

<li
key={index}
className="
flex
gap-2
"
>

<span>
✨
</span>

{fact}

</li>

)

)
}



</ul>


</div>


</GlassCard>





</div>

  );

};


export default Dashboard;