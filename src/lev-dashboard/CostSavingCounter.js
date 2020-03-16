import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-size: 9vh; 
  color: #9325b2;
  flex: 1 1 0; 
  text-align: center;
  border: 8px solid #9325b2;
  border-radius: 7px; 
  margin-bottom: 1vh; 
`

const CostSavingCounter = props =>
  <StyledDiv>
    <h2>£{Number(props.costsaving).toLocaleString()}</h2>
    <p>cost saving to {props.group}</p>
  </StyledDiv>

export default CostSavingCounter;


