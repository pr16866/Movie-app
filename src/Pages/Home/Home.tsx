import React from 'react'
import MovieCard from './MovieCard/MovieCard'

import { useState, useEffect } from "react";
import { fetchData } from '../../Services';

function Home() {
    const [movies, setMovies] = useState<any>([]);

    useEffect(() => {
        getData()
    }, []);
    const getData = async () => {
        let resp = await fetchData();
        setMovies(resp);
    }

    // console.log(movies);
    return (
        <>
            <div id="movies">
                {movies.length > 0 &&
                    movies.map((movie: any) => {

                        return <MovieCard {...movie} />;
                    })}
            </div>

        </>

    )
}

export default Home