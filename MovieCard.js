import React from 'react';
import { Link } from 'react-router-dom';
// http://localhost:3000/539681
function MovieCard({ movie, test }) {
    return (
        <li key={movie.id} id="movie1" data-toggle="modal" data-target="#moviedetail">
            <div className="movie">
                <figure className="movie__figure">
                    <Link to={`/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie__poster" /></Link>
                    <figcaption><span className="movie__vote">{movie.vote_average}</span></figcaption>
                    <h2 className="movie__title">{movie.original_title}</h2>
                </figure>
            </div>
        </li>
    )
}

export default MovieCard