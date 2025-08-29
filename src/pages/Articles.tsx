import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchArticles } from "../store";
import { Link } from "react-router-dom";

export default function Articles() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.articles);
  const [page, setPage] = useState(1);

  useEffect(() => { dispatch(fetchArticles(page)); }, [page]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Articles</h2>
      <div className="grid gap-4">
        {list.map((a: any) => (
          <div key={a.id} className="p-4 border rounded shadow">
            <h3 className="font-bold">{a.title}</h3>
            <p>{a.body?.substring(0, 80)}...</p>
            <Link to={`/articles/${a.id}`} className="text-blue-600">Read More</Link>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={() => setPage(page-1)} disabled={page===1} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
        <button onClick={() => setPage(page+1)} className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
}
