import React from 'react';
import StyledDiv from '../StyledDiv';
import {UserHistoryPosition} from "../../History/UserHistoryPosition";

const UserHistoryLanding = ({history}) => {

	return (<StyledDiv>
			<ul className={'history'}>
				{history.length === 0 ? <li>Brak historii na koncie</li> : <UserHistoryPosition history={history}/>}
			</ul>
		</StyledDiv>
	);
}

export default UserHistoryLanding;

