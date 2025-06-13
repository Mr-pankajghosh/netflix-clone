import React from "react";
import MoviesSection from "../components/MoviesSection";

const MOVIE_CATEGORIES = ["now_playing", "top_rated", "popular", "upcoming"];

function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Movies</h1>
      {MOVIE_CATEGORIES.map((category) => (
        <MoviesSection key={category} category={category} />
      ))}
    </div>
  );
}

export default Home;
