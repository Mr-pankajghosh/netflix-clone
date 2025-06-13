import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../hooks/useFetchMoviesByCategory";

function MoviesSection({ category }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesByCategory(category);
        if (data && Array.isArray(data)) {
          setMovies(data);
        } else {
          setError("Invalid data format");
        }
      } catch (err) {
        console.error("Error fetching movies for category:", category, err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    })();
  }, [category]);

  return (
    <section className="mb-6 px-4">
      <h2 className="text-xl font-bold mb-2 capitalize text-white">
        {category.replace("_", " ")}
      </h2>

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="flex overflow-x-auto space-x-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[150px] bg-gray-800 text-white p-2 rounded"
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-2"
              />
            ) : (
              <div className="w-full h-[225px] bg-gray-600 flex items-center justify-center text-sm text-gray-300">
                No Image
              </div>
            )}
            <p className="text-sm">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoviesSection;
