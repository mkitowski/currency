import React from 'react';
import StyledContainer from '../../Styled/StyledContainer/StyledContainer';
import { UserHistoryPosition } from '../../History/UserHistoryPosition';

const UserHistoryLanding = ({ history }) => {
  let hist = history || [];
  return (
    <StyledContainer>
      <h3>Ostanie 4 transakcje</h3>
      <ul className={'hist'}>
        {hist.length === 0 ? (
          <li>Brak historii na koncie</li>
        ) : (
          <UserHistoryPosition history={hist} count={4} />
        )}
      </ul>
    </StyledContainer>
  );
};

export default UserHistoryLanding;
