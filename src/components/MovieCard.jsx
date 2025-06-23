// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <img src={movie.image?.medium} className="card-img-top" alt={movie.name} />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p>{movie.genres?.join(', ')}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Movie</Link>
      </div>
    </div>
  </div>
);

export default MovieCard;
