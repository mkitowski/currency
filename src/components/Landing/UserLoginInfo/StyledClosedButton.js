import styled from "styled-components";

export const StyledCloseButton = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
	border-radius: 100%;
	//background: white;
	border:1px solid #dcdcdc;
	color:#000000;
	font-family:Arial,serif;
	font-size:15px;
	font-weight:bold;
	padding:6px 12px;
	cursor: pointer;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	transition: background-color .3s linear;
	:hover {
		background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);

	}
	:focus {
		box-shadow: none;
		outline: none;
		background-color: lightgray;
	}
`;