import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
  position: relative;
  z-index: 3;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  @media (min-width: 720px) {
    justify-content: space-between;
  }
  .logo {
    background-color: white;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
  }
  a {
    margin-left: 10%;
  }
`;

export const Header = ({ error, userLogged }) => {
  return (
    <HeaderStyled>
      <Link to={'/'}>
        <div className="logo">
          <Logo />
        </div>
      </Link>
      <Navigation error={error} userLogged={userLogged} />
    </HeaderStyled>
  );
};
