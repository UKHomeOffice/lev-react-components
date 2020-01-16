import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
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

const formatCount = (count) => count.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
const formatDate = (count) => count.format('DD/MM/YY');

const UsageCounter = props =>
  <StyledDiv>
    <p>Searches {props.group ? ' for ' + props.group : ''}</p>
    <p>{(props.from ? formatDate(props.from) + ' - ' : '')}
      {(props.to ? formatDate(props.to) : '')}</p>
    {formatCount(props.count)}
  </StyledDiv>;

export default UsageCounter;
