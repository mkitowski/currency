import React from 'react';
import styled from 'styled-components';
import {ChartHistory} from "./ChartHistory";
import {UserHistory} from "./UserHistory";

const StyledDiv = styled.div`
  padding-top: 125px;
	background-color: #efefef;
	width: 100vw;
	min-height: 100vh;
`;

export class History extends React.Component {

	render() {
		return <StyledDiv>

			<UserHistory/>
			<ChartHistory/>
		</StyledDiv>
	}
}