import Modal from "@/app/components/Modal";
import Image from "next/image";

const PhotoModalPage = async ({ params }: any) => {
  const movie = params.movie;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=275b51887d1605ee252bd5c00a1ab09a`
  );
  const res = await data.json();
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <Modal>
      <div className="p-5 bg-white rounded-md drop-shadow-sm">
        <Image
          src={imgUrl + res.poster_path}
          alt={res.title}
          width={400}
          height={400}
          className="rounded-md"
        />
        <h1>{res.title}!</h1>
        <p>{res.release_date}</p>
        <p>{res.overview}</p>
      </div>
    </Modal>
  );
};

export default PhotoModalPage;
