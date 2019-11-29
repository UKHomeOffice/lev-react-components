import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
        color: #9325b2;
        flex: 1 1 0; 
        text-align: center;
        border: 8px solid #9325b2;
        border-radius: 7px; 
        margin-right: 1vh; 
    h2 {
        font-size: 25vh; 
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: -3vh;
    }
    p { 
        font-size: 9vh; 
    }
`;

const formatCount = (count) => {
    return count.toString().replace(/\d(?=(\d{3})+$)/g, '$&,')
}

const DashboardCounter = props =>
    <StyledCounter>
        <h2 id={props.id}>{formatCount(props.count)}</h2>
        <p>{props.period}</p>
    </StyledCounter>

export default DashboardCounter;
