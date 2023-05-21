import Link from "next/link";
import Image from "next/image";
import MovieCard from "./MovieCard";

export default async function Movielist() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <div className="grid grid-cols-fluid gap-16">
        {res.results.map((movies: any) => (
          <MovieCard
            id={movies.id}
            title={movies.title}
            image={movies.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
