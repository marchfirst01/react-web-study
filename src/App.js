/* eslint-disable react/jsx-key */
import React from "react";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <div className="wrapper">
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
              <MovieDetail
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}



export default App;
