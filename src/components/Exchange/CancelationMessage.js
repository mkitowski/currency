import React from 'react';

class CancelationMessage extends React.Component {
    state ={
        vi1 : this.props.valueInput1,
        vi2 : this.props.valueInput2,
        s1 : this.props.selected1,
        s2 : this.props.selected2,
        r : this.props.rate
    }
    render() {
        return <div className={'confirmed'}>
            <h2>Zatwierdzenie transakcji - anulowanie</h2>
            <p>Transakcja wymiany:</p>
            <h4>{this.state.vi1} {this.state.s1}</h4>
            <p>na:</p>
            <h4>{this.state.vi2} {this.state.s2}</h4>
            <p>po kursie:</p>
            <h4>{this.state.r}</h4>
            <p><h5>Aktualizacja kursu - transakcja przerwana</h5></p>
        </div>
    }

}
export default CancelationMessage;