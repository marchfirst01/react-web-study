import React from 'react';

export default function MovieDetail({ title, overview }) {
  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h4>{title}</h4>
        <p>{overview}</p>
      </div>
    </div>
  );
}
