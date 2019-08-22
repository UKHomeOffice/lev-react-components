import React from 'react';
import styled from 'styled-components';
import DatePicker from "./DatePicker";
import { Button } from 'govuk-react';

const FormDiv = styled.div`
  position: relative;
  vertical-align: text-bottom;
  margin-bottom: 15px;
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

const ReportFilters = props =>
<form onSubmit={props.onSubmit}>
  <FormDiv>
    <DatePicker hint="Default: start of the month" input={{
      name: 'from',
      onChange: props.updateFrom,
      value: props.from
    }}>
      Usage from
    </DatePicker>
    <DatePicker hint="Default: now" input={{
      name: 'to',
      onChange: props.updateTo,
      value: props.to
    }}>
      Usage to
    </DatePicker>
    <BottomButton as={Button} type="submit">Show usage</BottomButton>
  </FormDiv>
</form>;

export default ReportFilters;
