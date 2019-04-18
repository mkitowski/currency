import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircleProgress from '../Progres/CircleProgress';


class LoaderDialog extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
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
            <DialogContentText id="alert-dialog-description">
            <CircleProgress/>
              Prosimy o cierpliwość, ładujemy dane Twojego profilu.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default LoaderDialog;