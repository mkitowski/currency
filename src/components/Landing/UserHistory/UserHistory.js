import React from 'react';
import StyledContainer from '../../Styled/StyledContainer';
import {UserHistoryPosition} from "../../History/UserHistoryPosition";

const UserHistoryLanding = ({history}) => {
	let hist = history || [];
	return (<StyledContainer>
			<h3>Ostanie transakcje</h3>
			<ul className={'hist'}>
				{hist.length === 0 ? <li>Brak historii na koncie</li> : <UserHistoryPosition history={hist}/>}
			</ul>
		</StyledContainer>
	);
}

export default UserHistoryLanding;

