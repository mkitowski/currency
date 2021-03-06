import styled from 'styled-components';

const StyledInputFull = styled.input`
  display: block;
  margin: 15px auto;
  padding: 0 5px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  height: 25px;
  transition: background-color 0.3s linear;
  :focus {
    box-shadow: none;
    outline: none;
    background-color: lightgray;
  }
`;

export default StyledInputFull;
