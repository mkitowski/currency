import styled from 'styled-components';

const StyledDiv = styled.div`
  min-width: 300px;
  min-height: 250px;
  position: absolute;
  bottom: ${props => props.bottom};
  top: ${props => props.top};
  left: 5%;
  background-color: white;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  .row {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    .col {
      width: 30%;
      border-bottom: 1px solid gray;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .colHead {
      width: 30%;
      font-weight: 800;
    }
  }

  ul {
		list-style: none;
		background: white;
		padding: 0;
		max-width: 80%;
	 	li {
	 		padding: 5px 15px;
	 		border-bottom: solid 1px gray;
	 		transition: background-color .3s linear, font-weight .3s linear;
	 		display: flex;
	 		.head{
	 			font-weight: 600;
	 		}
	 		.col2{
	 			min-width:150px;
	 		}
	 	}
	}
`;

export default StyledDiv;