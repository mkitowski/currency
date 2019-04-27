import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.5);
  @media (min-width: 720px) {
    justify-content: space-around;
  }
`;

const StyledNav = styled.nav`
  margin: 15px 15px 15px 0;
`;

export const Header = ({ error, userLogged }) => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <Logo />
      </Link>
      <StyledNav>
        <Navigation error={error} userLogged={userLogged} />
      </StyledNav>
    </HeaderStyled>
  );
};
