import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.div`
    color: red;
    font-weight: 100;
    padding-bottom: 10px;
`;

export default function(props) {
    return <StyledSpan>
        {props.message}
    </StyledSpan>
}