import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

function Movie() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const apiKey = "c0a540d14454051cf74ee4debd0b604e";

        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
            .then((res) => {setMovie(res.data);
                // console.log(res.data);
            })
            .catch((err) => {
                console.err('Error fetching data:', err);
            });
    }, [movieId]);

    return (
        <>
            <MovieDetails movie={movie} />
        </>
    );
}

export default Movie;
