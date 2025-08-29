import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function ArticleDetail() {
  const { id } = useParams();
  const article = useSelector((state: RootState) =>
    state.articles.list.find((a: any) => a.id === Number(id))
  );

  if (!article) return <p className="p-6">Article not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
}
