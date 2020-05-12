import React from 'react';
import styled from 'styled-components';
import { Details } from "govuk-react";

const StyledDiv = styled.div`
flex: 0 1 auto;
`;

const ReportContext = (props) =>
   <StyledDiv>
      <p>Selected Department: {props.selectedGroup ? props.selectedGroup : 'N/A'}</p>
      <p>Excluding Department(s): {Array.isArray(props.withoutGroups) ?
        props.withoutGroups.join(', ') : props.withoutGroups || 'N/A'}</p>
  </StyledDiv>

export default ReportContext;

