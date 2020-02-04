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
const formatCount = count => '£' + count;

const CostSavingCounter = props =>
  <StyledDiv>
    <p>Cost Saving to {props.group}</p>
    <h2>{formatCount(props.count)}</h2>
  </StyledDiv>

export default CostSavingCounter;


