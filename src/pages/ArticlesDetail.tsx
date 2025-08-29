import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchArticleById } from "../store";

export default function ArticleDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { detail, loading } = useSelector((state: RootState) => state.articles);

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!detail) return <p className="p-6">Article not found</p>;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      </div>

      {/* Content card */}
      <div className="relative z-10 max-w-2xl w-full backdrop-blur-sm bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          {detail.attributes.title}
        </h2>
        <p className="text-white text-lg leading-relaxed whitespace-pre-line">
          {detail.attributes.body}
        </p>
      </div>
    </div>
  );
}
