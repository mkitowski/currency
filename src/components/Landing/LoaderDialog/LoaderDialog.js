import React from 'react';
import Dialog from '@material-ui/core/Dialog/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogContentText from '@material-ui/core/DialogContentText/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import CircleProgress from '../../Progress/CircleProgress/CircleProgress';


class LoaderDialog extends React.Component {
	state = {
		open: false,
	};

	handleClose = () => {
		this.setState({open: false});
	};

	render() {
		return (
			<div>
				<Dialog
					open={this.props.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Ładowanie danych Twojego profilu"}</DialogTitle>
					<DialogContent>
						<CircleProgress/>
						<DialogContentText id="alert-dialog-description">
							Prosimy o cierpliwość, ładujemy dane Twojego profilu.
						</DialogContentText>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default LoaderDialog;