import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	border: 1px solid gray;
	border-radius: 0;
	height: 34px;
	border-right: none;
	transition: background-color .3s linear;
	&:focus {
		box-shadow: none;
		outline: none;
		background-color: lightgray;
	}
`;

const Select = styled.select`
	border: 1px solid gray;
	border-radius: 0;
	background: white;
	height: 38px;
	border-left: none;
	transition: background-color .3s linear;
	&:focus {
		box-shadow: none;
		outline: none;
		background-color: lightgray;
	option{
		background: white;
		border: none;
			
	}
	}
`;

export class ImputValue extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: this.props.currencyArray[0]
		}
	}

	handleSelect = (event) => {
		this.setState({selected: event.target.value});
	};


	render() {
		return <div>
			<Input value={this.props.value} onChange={this.props.handleChange} type={'number'}/>
			<Select value={this.state.selected} onChange={this.handleSelect}>
				{this.props.currencyArray.map(el => {
					return <option value={el} key={el}>{el}</option>
				})}
			</Select>
		</div>
	}
}