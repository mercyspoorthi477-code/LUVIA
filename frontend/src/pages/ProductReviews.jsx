import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShoppingBag,
  Star,
  ShieldCheck,
  Plus,
  X
} from "lucide-react";

import api from "../services/api";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import InputField from "../components/InputField";


const ProductReviews = () => {


const [products,setProducts] = useState([]);

const [selectedCategory,setSelectedCategory] = useState("All");

const [reviewModalOpen,setReviewModalOpen] = useState(false);



const [newReview,setNewReview] = useState({

productName:"",
brand:"",
category:"",
price:"",
rating:5,
review:""

});



const categories=[
"All",
"Sanitary Pads",
"Organic Pads",
"Menstrual Cups"
];





useEffect(()=>{

loadReviews();

},[]);





const loadReviews = async()=>{

try{

const res = await api.get("/review");


// REMOVE DUPLICATES

const uniqueProducts = [
...new Map(
res.data.map(
(item)=>[
item.productName,
item
]
)
).values()
];


setProducts(uniqueProducts);


}

catch(error){

console.log(
"Review fetch error",
error
);

}


};







const filteredProducts = products.filter(product=>{


if(selectedCategory==="All")
return true;


return product.category===selectedCategory;


});







const submitReview = async(e)=>{

e.preventDefault();


try{


await api.post(
"/review",
newReview
);


setReviewModalOpen(false);


setNewReview({

productName:"",
brand:"",
category:"",
price:"",
rating:5,
review:""

});


loadReviews();


}

catch(error){

console.log(error);

}


};







return (

<div className="
min-h-screen
text-white
pt-24
px-6
pb-16
max-w-7xl
mx-auto
space-y-8
">





{/* HEADER */}


<div className="
flex
justify-between
items-center
border-b
border-white/10
pb-6
">


<div>


<div className="
flex
items-center
gap-2
text-pink-300
text-xs
uppercase
">

<ShoppingBag size={16}/>

Period Product Reviews

</div>



<h1 className="
text-4xl
font-bold
mt-2
">

Safe Period Products

</h1>



<p className="
text-gray-300
text-sm
">

Verified reviews and safety information

</p>


</div>



<Button
variant="primary"
icon={Plus}
onClick={()=>setReviewModalOpen(true)}
>

Add Review

</Button>



</div>








{/* FILTER */}


<div className="
flex
gap-3
overflow-x-auto
">


{

categories.map(cat=>(


<button

key={cat}

onClick={()=>setSelectedCategory(cat)}

className={`
px-4
py-2
rounded-full
text-xs

${
selectedCategory===cat
?
"bg-pink-400 text-black"
:
"bg-white/10 text-white"
}

`}

>

{cat}

</button>


))


}


</div>








{/* PRODUCTS */}



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
">


{

filteredProducts.map(prod=>(



<GlassCard

key={prod.productName}

accent="rose"

className="
p-6
space-y-5
"


>





{/* NO IMAGE */}


<div className="
h-40
rounded-xl
bg-gradient-to-br
from-pink-500/20
to-purple-500/20
flex
items-center
justify-center
border
border-white/10
">

<ShoppingBag
size={50}
className="text-pink-300"
/>


</div>






<h2 className="
text-xl
font-bold
">

{prod.productName}

</h2>



<p className="
text-pink-300
">

{prod.brand}

</p>






<div className="
flex
items-center
gap-2
">


<Star

size={18}

className="
fill-yellow-400
text-yellow-400
"

/>


{prod.rating}/5


</div>






<div className="
flex
items-center
gap-2
bg-cyan-400/10
rounded-lg
p-2
text-xs
">


<ShieldCheck size={16}/>


{
prod.isSafe
?
"Safe Product"
:
"Check Safety"
}


</div>







<p className="
text-sm
text-gray-300
">

{prod.review}

</p>






<div>


<p className="
text-green-300
text-xs
">

Pros

</p>


{

prod.pros?.map(
(p,i)=>(

<p
key={i}
className="text-xs"
>

✓ {p}

</p>

)

)

}



</div>







<div>


<p className="
text-red-300
text-xs
">

Cons

</p>



{

prod.cons?.map(
(c,i)=>(

<p
key={i}
className="text-xs"
>

✕ {c}

</p>


)

)


}


</div>





<p className="
text-pink-300
font-bold
">

₹{prod.price}

</p>





</GlassCard>


))


}



</div>









{/* MODAL */}


<AnimatePresence>

{

reviewModalOpen && (


<div className="
fixed
inset-0
bg-black/80
z-50
flex
items-center
justify-center
">


<motion.div

initial={{
scale:0.8
}}

animate={{
scale:1
}}

className="
w-full
max-w-md
"

>



<GlassCard

className="
p-6
space-y-5
relative
"

>


<button

onClick={()=>setReviewModalOpen(false)}

className="
absolute
right-5
top-5
"

>

<X/>

</button>



<h2 className="
text-2xl
font-bold
">

Add Review

</h2>





<form
onSubmit={submitReview}
className="space-y-3"
>



<InputField

label="Product Name"

value={newReview.productName}

onChange={
e=>
setNewReview({
...newReview,
productName:e.target.value
})
}

/>



<InputField

label="Brand"

value={newReview.brand}

onChange={
e=>
setNewReview({
...newReview,
brand:e.target.value
})
}

/>



<textarea

required

placeholder="Your review"

className="
w-full
bg-white/10
rounded-xl
p-3
"

onChange={
e=>
setNewReview({
...newReview,
review:e.target.value
})
}

/>




<Button>

Submit Review

</Button>




</form>



</GlassCard>



</motion.div>



</div>


)


}


</AnimatePresence>





</div>


);


};


export default ProductReviews;