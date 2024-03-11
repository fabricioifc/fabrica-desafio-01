import { tmdb } from "@/api/tmdb";
import { Navbar } from "@/components/Navbar";
import { Skeleton } from "@/components/Skeleton";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}

export default async function Home() {

  const getPopular = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=afdbcb55aa6efc0a0035dbf90845a8fe&language=pt-BR&page=1");
    return result.json();
  };

  const popular = await getPopular() as { results: Movie[] };

  return (
    <div className="w-full">
      <Navbar/>

      {/* Carousel */}
      <section></section>

      <main className="w-4/5 mt-16 m-auto">

        <h1 className="text-3xl font-bold mb-2">Mais Populares</h1>
        <Skeleton />

        <h1 className="text-3xl font-bold mt-2 mb-2">Mais votados</h1>
        <Skeleton />
      </main>

      <footer className="w-full mt-6 py-6 border-t border-collapse border-zinc-800 text-zinc-400 text-center text-lg font-semibold tracking-wide">
        Fábrica de Software Challenge | IFCHub @ 2023
      </footer>
    </div>
  )
}
