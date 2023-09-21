/* eslint-disable react/jsx-key */
import React from "react";
import { styled } from "styled-components";
import Movie from "./components/Movie/Movie";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <AppContainer>
        {dummy.results.map((item) => {
          return (
            <Wrapper>
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
            </Wrapper>
          );
        })}
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
`



export default App;
