import React from 'react';
import styled from 'styled-components';



const Input = styled.input`
	border: 1px solid gray;
	border-radius: 6px;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
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
	border-radius: 6px;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
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

export class CurrencyInput extends React.Component {
         state = {
           selected: this.props.currenciesArray[this.props.first]
         };

         handleSelect = event => {
           this.setState({ selected: event.target.value });
         };

         render() {
           return (
             <div>
               <Input
                 value={this.props.value}
                 onChange={this.props.handleChange}
                 type={"number"}
               />
               <Select
                 value={this.state.selected}
                 onChange={this.handleSelect}
               >
					   {this.props.currenciesArray.map(el => {
                   return (
                     <option value={el} key={el}>
                       {el}
                     </option>
                   );
                 })}
               </Select>
             </div>
           );
         }
       }