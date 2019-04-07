import React from 'react';
import {UserInfo} from "./UserLoginInfo/UserInfo";
import {StyledInfoWindow} from "./UserLoginInfo/StyledInfoWindow";
import {CloseWindow} from "./UserLoginInfo/CloseWindow";

export class UserPasswordInfo extends React.Component {

	render() {
		return this.props.visible ? <StyledInfoWindow>
			<UserInfo userInfo={this.props.userInfo} action={this.props.action}/>
			<CloseWindow action={this.props.action}/>
		</StyledInfoWindow> : null
	}
}