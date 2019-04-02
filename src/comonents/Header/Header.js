
import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import UserInfo from './UserInfo';
import Navigation from './Navigation';

const HeaderStyled = styled.header`
	position: fixed;
	z-index: 3;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
	background-color: rgba(250,250,250,.5);
`;

const StyledNav = styled.nav`
	margin: 15px 15px 15px 0;
`;

export const Header = () => {
    return (
        <HeaderStyled>
            <Logo />
            <StyledNav>
                <UserInfo accountInfo={'125,00PLN, 250EUR'} />
                <Navigation />
            </StyledNav>
        </HeaderStyled>
    );
};