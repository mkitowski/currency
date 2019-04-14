import React from "react";
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';


const StyledHeader = styled.div`
	padding:5px;
	cursor: grab;
	:active {
		cursor: grabbing;
	}
`;


class MovedContainerHeader extends React.Component {

	state={
		x: this.props.x,
		y: this.props.y,
	}

	mouseDown = (e) =>{

		const x = e.pageX;
		const y = e.pageY;

		this.setState({x,y});
		e.preventDefault();
		document.addEventListener('mousemove',this.mouseMove);
		document.addEventListener('mouseup',this.mouseUp)
	}

	mouseMove = e =>{
		const x = Math.trunc(e.pageX/10)*10;
		const y = Math.trunc(e.pageY/10)*10;
		this.setState({x,y});
		this.props.action(x,y);
	}

	mouseUp = e =>{
		const x = Math.trunc(e.pageX/10)*10;
		const y = Math.trunc(e.pageY/10)*10;
		this.setState({x,y});
		// this.props.action(x,y);
		document.removeEventListener('mousemove',this.mouseMove);
		document.removeEventListener('mouseup',this.moueseUp);
	}

	render() {
		return(
			<div onMouseDown={this.mouseDown} style={{
				position:"absolute",
				x:this.state.x,
				y:this.state.y,
				zIndex:7
			}}>
				<StyledHeader>
					<Icon>
						drag_indicator
					</Icon>
				</StyledHeader>
			</div>
		);
	}
}

export default MovedContainerHeader