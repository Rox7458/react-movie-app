import React, { useContext } from "react";
import { MovieContextt } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
const Main = () => {
  const { filmler, loading } = useContext(MovieContextt);

  console.log(filmler);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {loading === true ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span>Yükleniyor....</span>
          </div>
        ) : (
          filmler.map((film) => <MovieCard key={film.id} {...film} />)
        )}
      </div>
    </div>
  );
};

export default Main;
