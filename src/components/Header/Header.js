import React from "react";
import styled from "styled-components";
import {Logo} from "./Logo";
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
	background-color: rgba(250,250,250,.5);
	@media(min-width: 720px){
	  justify-content: space-between;
	}
`;

const StyledNav = styled.nav`
	margin: 15px 15px 15px 0;
`;

export const Header = ({error}) => {
	return (
		<HeaderStyled>
			<Logo/>
			<StyledNav>
				<Navigation error={error}/>
			</StyledNav>
		</HeaderStyled>
	);
};
