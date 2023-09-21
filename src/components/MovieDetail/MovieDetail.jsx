import React from 'react';
import { MovieDetailContainer } from './MovieDetail.style';

export default function MovieDetail({ title, overview }) {
  return (
    <>
      <MovieDetailContainer className="movie-detail-container">
        <div className="movie-detail">
          <h4>{title}</h4>
          <p>{overview}</p>
        </div>
      </MovieDetailContainer>
      <div className="movie-detail-container"></div>
    </>
  );
}
