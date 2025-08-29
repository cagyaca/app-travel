import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchArticles } from "../store";
import { Link } from "react-router-dom";

export default function Articles() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.articles);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles(page));
  }, [page, dispatch]);

  if (loading) return <p className="p-6 text-white">Loading...</p>;

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-600">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full backdrop-blur-sm bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Articles</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {list.map((a: any) => (
            <div
              key={a.id}
              className="p-6 rounded-2xl bg-white bg-opacity-80 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-pink-700 mb-2">
                {a.attributes?.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {a.attributes?.body?.substring(0, 100)}...
              </p>
              <Link
                to={`/articles/${a.id}`}
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-800 text-white shadow-md hover:from-pink-700 hover:to-pink-900 hover:shadow-lg transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-pink-700 shadow hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            Prev
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-800 text-white shadow hover:from-pink-700 hover:to-pink-900 hover:shadow-lg transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
