import React from 'react';
import styled from 'styled-components';

const moment = require('moment');

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 20px;
  font-size: 60px;
  text-align: right;
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
    <p>{(props.from ? formatDate(props.from) + ' - ' : '')}
      {(props.to ? formatDate(props.to) : 'today')}</p>
    {formatCount(props.count)}
  </StyledDiv>;

export default UsageCounter;
