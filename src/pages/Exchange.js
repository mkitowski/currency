import React from 'react';
import { Redirect } from 'react-router';
import LoggedExchange from '../components/Exchange/LoggedExchange';

const Exchange = ({ userInfo, accountsInfo, currentRates, timer, confirm }) => {
  return userInfo.logged ? (
    <LoggedExchange
      userInfo={userInfo}
      accountsInfo={accountsInfo}
      currentRates={currentRates}
      timer={timer}
      confirm={confirm}
    />
  ) : (
    <Redirect to="/NotFound" />
  );
};

export default Exchange;
