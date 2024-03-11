import React from "react";
import { Movie } from "@/interfaces/movies";


import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Genre } from "./Genre";

export function MovieCard({ children, movie }: { children?: React.ReactNode, movie: Movie }) {

    const formatDate = (date: string) => {
        const [year, month, day] = date.split('-');
        const monthName = new Date(`${month}-01-01`).toLocaleString('pt-BR', { month: 'long' });
        return `${day} de ${monthName} de ${year}`;
    }
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="relative rounded-lg h-64 group z-1">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                        className="absolute rounded-lg top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full hidden z-10
                group-hover:flex flex-col items-start justify-end p-2 bg-gradient-to-t from-black to bg-transparent rounded-lg h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100
            ">
                        <div className="w-full px-2">
                            <div className="w-full flex flex-wrap gap-1">
                                {movie.genre_ids.map((genre, index) => {

                                    if ((index + 1) < 3)
                                        return (
                                            <span key={genre} className="text-xs bg-green-500 text-white rounded-full px-2 py-1 mr-1">
                                                <Genre genre={genre} />
                                            </span>
                                        )
                                })}
                            </div>
                            <h2 className="mt-2 text-sm font-bold">{movie.title}</h2>
                        </div>
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent
                align="center"
                sideOffset={12}
            >
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                    <div className="pt-2 pb-3 text-sm px-3">
                        <p className="mt-1 text-2xl text-gray-100 font-extrabold text-wrap">{movie.title}</p>
                        
                        <span className="text-gray-400"><b className="text-gray-100">Popularidade:</b> {+(movie.popularity).toFixed(2)}</span>

                        <p className="mt-1 text-gray-400 leading-relaxed text-wrap break-words"><b className="text-gray-300">Sinopse:</b> {
                            movie.overview.split(' ').length > 20 ? 
                                movie.overview.split(' ').slice(0, 20).join(' ').concat('...') :
                                movie.overview
                        }</p>
                        <p className="mt-1 text-gray-400 text-justify leading-tight"><b className="text-gray-300">Data de lançamento:</b> {formatDate(movie.release_date)}</p>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
