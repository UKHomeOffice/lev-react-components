import React from 'react';
import styled from 'styled-components';
import DateRange from "./DateRange";
import {Button} from 'govuk-react';

const FormDiv = styled.div`
  position: relative;
  vertical-align: text-bottom;
`;
const BottomButton = styled('Button')`
  margin-bottom: 2px;
  position: absolute;
  bottom: 0px;

  :active {
    top: inherit;
    bottom: -2px;
  }
`;

const ReportControls = props =>
<form onSubmit={props.onSubmit}>
  <FormDiv>
    <DateRange
      fromHint="Default: start of the month"
      toHint="Default: end of today"
      onChange={props.onChange}
      fromValue={props.from}
      toValue={props.to}
    >
      Usage date range
    </DateRange>
    <BottomButton as={Button} type="submit">Show usage</BottomButton>
  </FormDiv>
</form>;

export default ReportControls;
