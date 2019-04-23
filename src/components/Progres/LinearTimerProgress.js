import styled from 'styled-components';
import React from 'react';
import {mix} from 'polished';

const StyledTimerLine = styled.div`

    width : 100%;
    transform: scaleX(${props => props.width});
    height : 90%;
    background: ${props => mix( props.width ,'lightgreen','red')};
    border-radius: 2px;
    transition: transform .62s ease-out;
    transform-origin: left;
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
        <StyledTimerLine width={Math.floor((+props.timer / 60)*100)/100} height={props.height}></StyledTimerLine>
        </StyledLineContainer>
    </div>
}

export default LinearTimerProgress