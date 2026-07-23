import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import { ArrowLeft, Clock, User, PlayCircle } from "lucide-react";

const ArticleDetails = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/article/all")
      .then((res) => {
        const found = res.data.find((a) => a._id === id);
        setArticle(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading Article...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Article Not Found</h1>

        <Link
          to="/health"
          className="mt-6 px-6 py-3 rounded-xl bg-pink-500"
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1023] text-white">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[420px] object-cover"
      />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <Link
          to="/health"
          className="inline-flex items-center gap-2 text-cyan-400 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Articles
        </Link>

        <span className="px-4 py-2 rounded-full bg-pink-500">
          {article.category}
        </span>

        <h1 className="text-5xl font-bold mt-6">
          {article.title}
        </h1>

        <div className="flex gap-8 mt-6 text-gray-300">

          <div className="flex items-center gap-2">
            <User size={18} />
            {article.author}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {article.readTime}
          </div>

        </div>

        <div className="mt-10 text-lg leading-9 text-gray-300 whitespace-pre-line">
          {article.content}
        </div>

        <div className="mt-10 bg-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-5">
            💜 Health Tips
          </h2>

          <ul className="space-y-3 text-gray-300">

            <li>✅ Stay hydrated throughout the day.</li>

            <li>✅ Eat iron-rich foods like spinach and beans.</li>

            <li>✅ Sleep at least 7–8 hours every night.</li>

            <li>✅ Exercise regularly to improve hormonal balance.</li>

            <li>✅ Track your cycle every month.</li>

            <li>✅ Consult a doctor for severe pain or irregular periods.</li>

          </ul>

        </div>

        <div className="mt-10">

          <a
            href={article.videoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-700"
          >
            <PlayCircle size={24} />
            Watch Related Video
          </a>

        </div>

      </div>

    </div>
  );
};

export default ArticleDetails;