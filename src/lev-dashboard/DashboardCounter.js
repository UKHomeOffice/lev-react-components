import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
        color: #9325b2;
        flex: 1 1 0; 
        text-align: center;
        border: 8px solid #9325b2;
        border-radius: 7px; 
        font-size: 9vh; 
    h2 {
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: -3vh;
    }
`;

const formatCount = (count) => {
    return Number(count).toLocaleString();
};

const DashboardCounter = props =>
  <StyledDiv>
    <h2 id={props.id}>{formatCount(props.count)}</h2>
    <p>{props.period}</p>
  </StyledDiv>;

export default DashboardCounter;
