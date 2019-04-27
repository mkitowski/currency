import React from 'react';
import StyledInfoWindow from '../../Styled/StyledInfoWindow/StyledInfoWindow';
import StyledCloseButton from '../../Styled/StyledClosedButton/StyledClosedButton';
import StyledButton from '../../Styled/StyledButton/StyledButton';

const TransactionConfirmed = ({ history, close }) => {
  let newTransaction = history[0];
  return newTransaction ? (
    <StyledInfoWindow justify={'start'}>
      <StyledCloseButton>X</StyledCloseButton>
      <h2>Potwierdzenie transakcji</h2>
      <h4>Czas transakcji</h4>
      <p>
        {' '}
        Data transakcji: <span className={'bold'}> {newTransaction.date}</span>
      </p>
      <p>
        {' '}
        Godzina transakcji:{' '}
        <span className={'bold'}> {newTransaction.time}</span>
      </p>
      <h4>Dane transakcji</h4>
      <p>
        Sprzedano :{' '}
        <span className={'bold'}>
          {newTransaction.sellValue} {newTransaction.sellCurrency}
        </span>
      </p>
      <p>
        Kupiono :{' '}
        <span className={'bold'}>
          {newTransaction.buyValue} {newTransaction.buyCurrency}
        </span>
      </p>
      <p>
        Kurs: <span className={'bold'}>{newTransaction.rate}</span>
      </p>
      <div>
        <StyledButton onClick={close}>Zamknij</StyledButton>
      </div>
    </StyledInfoWindow>
  ) : null;
};

export default TransactionConfirmed;
