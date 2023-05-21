import Image from "next/image";

export default async function page({ params }: any) {
  const movie = params.movie;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <Image
        src={imgUrl + res.poster_path}
        width={400}
        height={400}
        alt={res.title}
      />
      <h1>{res.title}</h1>
      <p>release date: {res.release_date}</p>
      <p>{res.overview}</p>
    </div>
  );
}
