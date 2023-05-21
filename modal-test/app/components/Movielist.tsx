import Link from "next/link";
import Image from "next/image";

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
          <Link href={`movie/${JSON.stringify(movies.id)}`} key={movies.id}>
            <div className="bg-white rounded-md p-3 shadow-md">
              <Image
                className="rounded-md w-full mb-4"
                src={imgUrl + movies.poster_path}
                height={500}
                width={500}
                alt={movies.title}
                priority
              />
              <h2 className="text-xl">{movies.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
