import React, { useState, useEffect } from "react";
import { BookOpen, Search, Clock, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../services/api";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import HealthStats from "../components/HealthStats";

const HealthHub = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const categories = [
    "All",
    "Periods",
    "PCOS",
    "Nutrition",
    "Exercise",
    "Mental Health",
  ];

  useEffect(() => {
    api
      .get("/article/all")
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filtered = articles.filter(
    (a) =>
      (category === "All" || a.category === category) &&
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.summary.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen text-white pt-24 px-6 pb-16">

      <div className="max-w-7xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold flex items-center gap-3">
          <BookOpen />
          Health & Hormone Hub
        </h1>

        <HealthStats totalArticles={filtered.length} />

        <div className="relative">
          <Search className="absolute left-4 top-4 text-gray-400" size={20} />

          <input
            className="w-full pl-12 p-4 rounded-xl bg-white/10 border border-white/10"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>


        <div className="flex flex-wrap gap-3">

          {categories.map((c) => (

            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full transition ${
                category === c
                  ? "bg-purple-500"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {c}
            </button>

          ))}

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((article) => (

            <GlassCard
              key={article._id}
              className="overflow-hidden hover:scale-[1.02] transition cursor-pointer"
              onClick={() => setSelected(article)}
            >

              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
              />


              <div className="p-5 space-y-3">


                <span className="text-cyan-300 text-sm">
                  {article.category}
                </span>


                <h2 className="text-xl font-bold">
                  {article.title}
                </h2>


                <p className="text-gray-300 text-sm line-clamp-3">
                  {article.summary}
                </p>


              </div>


            </GlassCard>

          ))}

        </div>


      </div>



      <AnimatePresence>

        {selected && (

          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="fixed inset-0 bg-black/80 flex justify-center items-center p-5 z-50"

          >


            <motion.div

              initial={{ scale: .9 }}
              animate={{ scale: 1 }}
              exit={{ scale: .9 }}

              className="bg-[#13131f] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"

            >


              <img

                src={selected.image}
                alt={selected.title}
                className="w-full h-72 object-cover rounded-t-3xl"

              />



              <div className="p-8">


                <div className="flex justify-between items-start">


                  <div>


                    <p className="text-cyan-300">
                      {selected.category}
                    </p>


                    <h2 className="text-4xl font-bold mt-2">
                      {selected.title}
                    </h2>



                    <div className="flex gap-5 mt-4 text-gray-400">


                      <span className="flex items-center gap-2">

                        <User size={16}/>

                        {selected.author || "LUVIA Team"}

                      </span>



                      <span className="flex items-center gap-2">

                        <Clock size={16}/>

                        {selected.readTime || "5 min read"}

                      </span>


                    </div>


                  </div>




                  <button

                    onClick={() => setSelected(null)}

                    className="bg-red-500 p-2 rounded-full"

                  >

                    <X/>

                  </button>



                </div>





                <p className="mt-8 text-gray-300 leading-8 whitespace-pre-line">


                  {selected.content ||
                    selected.summary ||
                    "Content coming soon..."}


                </p>




              </div>




            </motion.div>




          </motion.div>


        )}



      </AnimatePresence>


    </div>
  );
};


export default HealthHub;