import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 60px;
  display: flex;
  justyfy-content: space-between;
//   align-items: center;
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  );
};
