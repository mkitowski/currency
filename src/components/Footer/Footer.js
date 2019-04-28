import React from 'react';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';

const FooterStyled = styled.header`
  position: absolute;
  bottom: 0;
  z-index: 3;
  width: 100vw;
  height: 40px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 14px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Footer = ({ error, userLogged }) => {
  return (
    <FooterStyled>
      Maciej Kitowski <Icon size={'14px'}>copyright</Icon>2019{' '}
      <a href={'https://github.com/mkitowski/currency.git'} target={'_blanc'}>
        Check My Github
      </a>
    </FooterStyled>
  );
};

export default Footer;
