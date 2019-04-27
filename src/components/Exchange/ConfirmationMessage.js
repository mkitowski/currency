import React from 'react';

const ConfirmationMessage = ({
  valueInput1,
  valueInput2,
  selected1,
  selected2,
  rate,
  timer,
}) => {
  return (
    <div className={'confirmed'}>
      <h2>Zatwierdź transakcje</h2>
      <p>Transakcja wymiany:</p>
      <h4>
        {valueInput1} {selected1}
      </h4>
      <p>na:</p>
      <h4>
        {valueInput2} {selected2}
      </h4>
      <p>po kursie:</p>
      <h4>{rate}</h4>
      <h5>
        Oferta ważna przez: <span>{timer} sek.</span>
      </h5>
    </div>
  );
};

export default ConfirmationMessage;
