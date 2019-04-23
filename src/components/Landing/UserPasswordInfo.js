import React from 'react';
import {UserInfo} from "./UserLoginInfo/UserInfo";
import {StyledInfoWindow} from "../Styled/StyledInfoWindow";
import {CloseWindow} from "./UserLoginInfo/CloseWindow";
// import Dialog from '@material-ui/core/Dialog';

export class UserPasswordInfo extends React.Component {

	render() {
		return this.props.visible && <StyledInfoWindow>
			<UserInfo userInfo={this.props.userInfo} action={this.props.action}/>
			<CloseWindow action={this.props.action}/>
		</StyledInfoWindow>
	}
}