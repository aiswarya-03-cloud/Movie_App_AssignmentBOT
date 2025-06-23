// src/pages/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{movie.name}</h2>
      <img src={movie.image?.medium} alt={movie.name} />
      <p dangerouslySetInnerHTML={{ __html: movie.summary }} />
      <ul>
        <li><strong>Genres:</strong> {movie.genres.join(', ')}</li>
        <li><strong>Language:</strong> {movie.language}</li>
        <li><strong>Rating:</strong> {movie.rating.average || 'N/A'}</li>
      </ul>
    </div>
  );
};

export default MovieDetail;
