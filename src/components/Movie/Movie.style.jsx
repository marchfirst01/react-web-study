import styled from 'styled-components';

export const MovieContainer = styled.div`
  width: 250px;
  height: 500px;

  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieInfo = styled.div`
  height: 50px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  > h4 {
    margin: 0;
  }

  > span {
    margin-left: 10px;
  }
`;
