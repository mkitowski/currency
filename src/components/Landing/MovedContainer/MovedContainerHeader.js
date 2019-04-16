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

	state = {
		x: this.props.x,
		y: this.props.y,
	}
	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	mouseDown = (e) => {

		const x = e.pageX;
		const y = e.pageY;
		if (this._isMounted) {
			this.setState({ x, y });
		}
		e.preventDefault();
		document.addEventListener('mousemove', this.mouseMove);
		document.addEventListener('mouseup', this.mouseUp)
	}

	mouseMove = e => {
		const x = Math.trunc(e.pageX / 10) * 10;
		const y = Math.trunc(e.pageY / 10) * 10;
		if (this._isMounted) {
			this.setState({ x, y });
		}
		this.props.action(x, y);
		e.preventDefault();
	}

	mouseUp = e => {
		const x = Math.trunc(e.pageX / 10) * 10;
		const y = Math.trunc(e.pageY / 10) * 10;
		if (this._isMounted) {
			this.setState({ x, y });
		}
		// this.props.action(x,y);
		document.removeEventListener('mousemove', this.mouseMove);
		document.removeEventListener('mouseup', this.moueseUp);
		e.preventDefault();
	}



	render() {
		return (
			<div onMouseDown={this.mouseDown} style={{
				position: "absolute",
				x: this.props.x,
				y: this.props.y,
				zIndex: 7
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