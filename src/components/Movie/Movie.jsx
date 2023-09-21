import React from 'react';
import { MovieContainer, MovieInfo } from './Movie.style';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w1280/';

export default function Movie(props) {
  return (
    <>
      <MovieContainer className='movie-container'>
        <img
          src={IMG_BASE_URL + props.poster_path}
          alt="영화포스터"
          width={250}
          height={400}
        />
        <MovieInfo>
          <h4>{props.title}</h4>
          <span>{props.vote_average}</span>
        </MovieInfo>
      </MovieContainer>
    </>
  );
}
