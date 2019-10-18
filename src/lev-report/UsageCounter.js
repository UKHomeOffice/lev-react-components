import React from 'react';
import styled from 'styled-components';
const moment = require('moment');

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

const formatCount = (count) => Number(count).toLocaleString();
const formatDate = (date, mDate = moment(date)) => date && mDate.isValid() && mDate.format('DD/MM/YY');

const UsageCounter = props =>
  <StyledDiv>
    <p>Searches {props.group ? ' for ' + props.group : ''}</p>
    <p>{(props.from ? formatDate(props.from) + ' - ' : '')}
      {(props.to ? formatDate(props.to) : 'today')}</p>
    {formatCount(props.count)}
  </StyledDiv>;
const UsageCounter = props => <StyledCounter><p>{props.countPeriod}</p>{props.count}</StyledCounter>;

export default UsageCounter;
