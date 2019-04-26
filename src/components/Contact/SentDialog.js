import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


class SentDialog extends React.Component {

	render() {
		return (
			<div>
				<Dialog
					open={this.props.open}
					onClose={this.props.close}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Wiadomość wysłana!!"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Twoja wiadomość została wysłana!! Może kiedyś, ktoś, bedzie się bardzo nudził, i ją usunie bez czytania...
						</DialogContentText>
						<DialogActions>
							<Button onClick={this.props.close} color="primary" autoFocus>
								Zrozumiałem
							</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

export default SentDialog;