import MovedContainerHeader from "./MovedContainerHeader";
import React from "react";


class MovedContainer extends React.Component {
	state = {
		x: this.props.x,
		y: this.props.y
	}

	action = (x, y) => {
		this.setState({
			x, y
		});
		this.props.action(x,y);
	}

	render() {

		return <div style={{
			position: 'absolute',
			left: this.state.x,
			top: this.state.y,
		}}>
			<MovedContainerHeader x={this.state.x} y={this.state.y} action={this.action}/>
			{this.props.children}
		</div>
	}
}

export default MovedContainer;
