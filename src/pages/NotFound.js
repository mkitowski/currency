import React from 'react';
import styled from 'styled-components';
import trev from '../img/trev.gif';

const StyledDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
  text-align: center;
  img {
    height: 200px;
  }
`;

const NotFound = () => {
  return (
    <StyledDiv>
      <h1>Błąd - 404</h1>
      <p>Zgubiliśmy stronę której szukasz...</p>
      <img src={trev} alt="404" />
      <p>...może gdzieś tu jest...</p>
    </StyledDiv>
  );
};

export default NotFound;
