"use client";
import Link from "next/link";
import Image from "next/image";

export default function MovieCard({
  id,
  title,
  image,
}: {
  id: string;
  title: string;
  image: string;
}) {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <Link href={`movie/${JSON.stringify(id)}`}>
      <div className="bg-white rounded-md p-3 shadow-md">
        <Image
          className="rounded-md w-full mb-4"
          src={imgUrl + image}
          height={500}
          width={500}
          alt={title}
          priority
        />
        <h2 className="text-xl">{title}</h2>
      </div>
    </Link>
  );
}
