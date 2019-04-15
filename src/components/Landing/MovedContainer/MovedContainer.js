import MovedContainerHeader from "./MovedContainerHeader";
import React from "react";


class MovedContainer extends React.Component {
	state = {
		x: this.props.x,
		y: this.props.y
	}
	_isMounted = false
	action = (x, y) => {
		if (this._isMounted) {
			this.setState({
				x, y
			});
			this.props.action(x, y);
		}
	}

	componentDidMount(){
		this._isMounted=true;
	}

	componentWillUnmount(){
		this._isMounted=false;
	}

	render() {

		return <div style={{
			position: 'absolute',
			left: this.state.x,
			top: this.state.y,
		}}>
			<MovedContainerHeader x={this.state.x} y={this.state.y} action={this.action} />
			{this.props.children}
		</div>
	}
}

export default MovedContainer;
