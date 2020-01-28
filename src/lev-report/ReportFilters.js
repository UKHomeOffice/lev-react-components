import React from 'react';
import styled from 'styled-components';
import DatePicker from "./DatePicker";
import { Button } from 'govuk-react';
import GroupFilter from './GroupFilter';

const FormDiv = styled.div`
  position: relative;
  vertical-align: text-bottom;
  margin-bottom: 15px;
`;
const BottomButton = styled('Button')`
  margin-bottom: 2px;
  display: inline-block;
  bottom: 0px;
  vertical-align: bottom;

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
    <GroupFilter hint="Default: All Departments" groups={props.groups}
                 selectedGroup={props.currentGroup} name="currentGroup">
      Filter by Department
    </GroupFilter>
    <BottomButton as={Button} type="submit">Show usage</BottomButton>
  </FormDiv>
</form>;

export default ReportFilters;
