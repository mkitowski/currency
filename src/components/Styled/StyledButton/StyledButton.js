import styled from 'styled-components';

const StyledButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  :hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);
    background-color: #dfdfdf;
  }
  :active {
    position: relative;
    top: 1px;
    outline: 0;
    border: none;
  }
  :selected {
    outline: 0;
    border: none;
  }
  :focus {
    outline: none;
  }

  :disabled {
    background-color: #ededed;
    color: #000;
  }
`;

export default StyledButton;
