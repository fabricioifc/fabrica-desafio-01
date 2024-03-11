import { getPopular } from "@/api/tmdb";
import { MovieCard } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { PaginationComponent } from "@/components/Pagination";
import { Movie } from "@/interfaces/movies";
import { Suspense } from "react";

export default async function Popular(
  { params } : { params: { page:number }}
) {

  const popular = await getPopular(params.page) as { results: Movie[], total_pages: number, total_results: number };

  return (
    <Suspense fallback={"Carregando..."}>
        <div className="w-full">
        <Navbar/>

        <main className="w-4/5 m-auto mt-20">

          <h1 className="text-3xl font-extrabold mb-1">Mais populares</h1>
          <p className="text-xs font-semibold text-zinc-400">
            Total de páginas: {popular?.total_pages || 0} | Total de resultados: {popular?.total_results || 0}
          </p>

          <section className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-2 mt-4">
            {popular?.results.length > 0 ? popular.results.map((movie, index) => (
              <MovieCard 
                key={`${index}-${movie.id}`} 
                movie={movie} 
              />
            )) : "Nenhum resultado encontrado"}
          </section>

          {popular?.total_pages > 0 && <PaginationComponent category="popular" totalPages={popular?.total_pages} currentPage={Number(params.page)} />}

        </main>

        <footer className="w-full mt-6 py-6 border-t border-collapse border-zinc-800 text-zinc-400 text-center text-lg font-semibold tracking-wide">
          Fábrica de Software Challenge | IFCHub @ 2023
        </footer>

      </div>
    </Suspense>
  )
}