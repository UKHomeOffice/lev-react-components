import React from 'react';
import styled from 'styled-components';
const moment = require('moment');

const StyledDiv = styled.div`
  display: inline-block;
  font-size: 40px;
  margin-left: 20px;
  text-align: right;
  overflow: auto;
  p {
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 3px;
  }
`;

const formatCount = (count) => Number(count).toLocaleString();
const formatDate = (date, mDate = moment(date)) => date && mDate.isValid() && mDate.format('DD/MM/YY');

const UsageCounter = props =>
  <StyledDiv>
    <p>Searches {props.group && 'for ' + props.group}</p>
    {props.withoutGroups && <p>excluding selected department(s)</p>}
    <p>{(props.from ? formatDate(props.from) + ' - ' : '')}
      {(props.to ? formatDate(props.to) : 'today')}</p>
    {formatCount(props.count)}
  </StyledDiv>;

export default UsageCounter;
