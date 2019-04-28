import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	width-min: 200px;
	cursor: pointer;
	padding: 6px;
	border: 1px solid gray;
	border-radius: 6px;
	background: white;
	margin-right: 10%;
	li{
		a {
			transition: color .3s ease-in-out;
			padding: 6px;
			color: #393939
			text-decoration: none;
			:hover {
				color: #0097EC;
			}
		}
	}
`;

const Navigation = ({ error, userLogged }) => {
  return (
    <StyledList>
      <li>
        <Link to="/">Start</Link>
      </li>
      {!error && userLogged && (
        <li>
          <Link to="/exchange">Wymień</Link>
        </li>
      )}
      <li>
        <Link to="/history">Historia</Link>
      </li>
      <li>
        <Link to={'/contact'}>Kontact</Link>
      </li>
    </StyledList>
  );
};
export default Navigation;
