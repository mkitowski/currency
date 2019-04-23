import styled from 'styled-components';
import React from 'react';

const StyledTimerLine = styled.div`
    width : ${props=>props.width};
    height : 90%;
    background : green;
    position: relative;
    top: 0;
    left: 0;
    z-index:1;
`;

const StyledLineContainer = styled.div`
    width : ${props => props.width};
    height : ${props => props.height};
    font-size: ${props => props.height};
    padding: 2px;
    border: 1px solid gray;
    border-radius: 2px;
    margin: 5px auto 0;
    position: relative;
`;


const LinearTimerProgress = props => {

    return <div>
        {props.text}
        <StyledLineContainer width={props.width} height={props.height} >
        <StyledTimerLine width={`${Math.floor((+props.timer / 60) * 100)}%`} height={props.height}></StyledTimerLine>
        </StyledLineContainer>
    </div>
}

export default LinearTimerProgress