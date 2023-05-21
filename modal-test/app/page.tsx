import Movielist from "./components/Movielist";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-5">Movie List</h1>
      {/* @ts-expect-error Server Component */}
      <Movielist />
    </main>
  );
}
