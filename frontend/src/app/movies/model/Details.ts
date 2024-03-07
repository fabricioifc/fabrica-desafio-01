import { Genre } from "./Genre";

export interface Details{
    genres: Genre[];
    original_language: string
    original_title: string
    overview: string
    release_date: string
    status: string
    vote_average: number
}
