import React from "react";
import { BookOpen, Heart, Activity } from "lucide-react";
import GlassCard from "./GlassCard";

const HealthStats = ({ totalArticles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

      <GlassCard className="p-5">
        <BookOpen className="text-cyan-400 mb-2" size={28}/>
        <h2 className="text-3xl font-bold text-white">
          {totalArticles}
        </h2>
        <p className="text-gray-400">
          Total Articles
        </p>
      </GlassCard>

      <GlassCard className="p-5">
        <Heart className="text-pink-400 mb-2" size={28}/>
        <h2 className="text-3xl font-bold text-white">
          100%
        </h2>
        <p className="text-gray-400">
          Trusted Content
        </p>
      </GlassCard>

      <GlassCard className="p-5">
        <Activity className="text-green-400 mb-2" size={28}/>
        <h2 className="text-3xl font-bold text-white">
          6
        </h2>
        <p className="text-gray-400">
          Health Categories
        </p>
      </GlassCard>

    </div>
  );
};

export default HealthStats;