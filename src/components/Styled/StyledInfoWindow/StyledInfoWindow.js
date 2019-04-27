import styled from "styled-components";

const StyledInfoWindow = styled.div`
	width: 80vw;
  height: 80vh;
  position: fixed;
  top: 10vh;
  left: 10vw;
  background-color: white;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  z-index: 500;
  display: flex;
  justify-content: ${props => props.justify || "space-around"};
  flex-direction: column;
  .bold {
  	font-weight: 700;
  }
`;
export default StyledInfoWindow;