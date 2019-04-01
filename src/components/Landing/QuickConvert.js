import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const StyledDiv = styled.div`
	width: 35%;
	height: 20%;
	position: absolute;
	bottom: 5%;
	left: 5%;
	background-color: white;
	box-shadow: 2px 2px 7px rgba(0,0,0,0.7);
	text-align: center;
`;


export default class QuickConvert extends React.Component{
	render(){
		return <StyledDiv>
			<h3>Szybka wymiana</h3>
			<Form/>
		</StyledDiv>
	}
}