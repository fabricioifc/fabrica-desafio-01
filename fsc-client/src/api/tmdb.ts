export const getPopular = async (page: number) => {
    try {
        const result = await fetch(`http://localhost:8000/popular/movie/pt-BR/${page}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRiY2I1NWFhNmVmYzBhMDAzNWRiZjkwODQ1YThmZSIsInN1YiI6IjYxNzAwOTkwYTA5N2RjMDA0MjY3OWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qssDtNu-x6lHkMzfXJqbk1Ue2Jm-eVKgMBgjpCyC_mc"
            },
        });
        console.log(result);
        return result.json();
    } catch (error) {
        console.error(error);
    }
};

export const getTopRated = async (page: number) => {
    try {
        const result = await fetch(`http://localhost:8000/top_rated/movie/pt-BR/${page}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRiY2I1NWFhNmVmYzBhMDAzNWRiZjkwODQ1YThmZSIsInN1YiI6IjYxNzAwOTkwYTA5N2RjMDA0MjY3OWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qssDtNu-x6lHkMzfXJqbk1Ue2Jm-eVKgMBgjpCyC_mc"
            },
        });
        return result.json();
    } catch (error) {
        console.error(error);
    }
};

// export const getTopRated = async (page: number) => {
//     const result = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=afdbcb55aa6efc0a0035dbf90845a8fe&language=pt-BR&page=${page}`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRiY2I1NWFhNmVmYzBhMDAzNWRiZjkwODQ1YThmZSIsInN1YiI6IjYxNzAwOTkwYTA5N2RjMDA0MjY3OWUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qssDtNu-x6lHkMzfXJqbk1Ue2Jm-eVKgMBgjpCyC_mc"
//         },
//     });
//     return result.json();
// };