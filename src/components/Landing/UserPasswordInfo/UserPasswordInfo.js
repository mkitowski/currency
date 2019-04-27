import React from 'react';
import UserInfo from "../UserLoginInfo/UserInfo/UserInfo";
import StyledInfoWindow from "../../Styled/StyledInfoWindow/StyledInfoWindow";
import CloseWindow from "../UserLoginInfo/CloseWindow/CloseWindow";


const UserPasswordInfo = ({
														userInfo, action, visible
													}) => {
	return visible && <StyledInfoWindow>
		<UserInfo userInfo={userInfo} action={action}/>
		<CloseWindow action={action}/>
	</StyledInfoWindow>
};

export default UserPasswordInfo;