import React from 'react';
import { Details } from "govuk-react";
import styled from "styled-components";
import CheckBoxFilter from "./CheckBoxFilter";
import CountSummary from "./CountSummary";

const AdvancedSearchContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 15px;
  transform-origin: left;
  transform: scale(0.7);
`

const AdvancedSearchFilter = (props) =>
  <React.Fragment>
    <Details summary={props.children}>
      <AdvancedSearchContainer>
        <CheckBoxFilter groups={props.groups} selectedGroup={props.withoutGroups} name="withoutGroup">
          Exclude Department(s)
        </CheckBoxFilter>
        <CountSummary selectedGroup={props.selectedGroup} withoutGroups={props.withoutGroups} />
      </AdvancedSearchContainer>
    </Details>
  </React.Fragment>

export default AdvancedSearchFilter;
