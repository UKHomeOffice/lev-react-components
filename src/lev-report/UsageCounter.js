import React from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  font-size: 40px;
  vertical-align: text-bottom;
  display: inline-block;
  margin-left: 20px;
  text-align: right;
  p {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

const UsageCounter = props => <StyledCounter><p>{props.countPeriod}</p>{props.count}</StyledCounter>;

export default UsageCounter;
