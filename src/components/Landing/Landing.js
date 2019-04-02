import bck from '../../img/background-land.jpg';
import styled from 'styled-components';
import React from 'react';
import Rates from './Rates';
import CurrencyArray from '../../Data/currencies';


const StyledLanding = styled.div`
position: absolute;
top: 0;
left: 0;
	background: url(${bck}), no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	z-index: 0;
`;

export default class Landing extends React.Component {
	render() {
		return <StyledLanding>
			<Rates curArray={CurrencyArray}/>
		</StyledLanding>
	}
}