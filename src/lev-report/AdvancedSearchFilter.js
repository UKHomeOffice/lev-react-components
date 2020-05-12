import React from 'react';
import { Details } from "govuk-react";
import styled from "styled-components";
import CheckBoxFilter from "./CheckBoxFilter";
import ReportContext from "./ReportContext";

const AdvancedSearchContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 15px;
  transform-origin: left;
  transform: scale(0.7);
`

const AdvancedSearchFilter = (props) =>
    <Details summary={props.children}>
      <AdvancedSearchContainer>
        <CheckBoxFilter groups={props.groups} selectedGroup={props.withoutGroups} name="withoutGroup">
          Exclude Department(s)
        </CheckBoxFilter>
        <ReportContext selectedGroup={props.selectedGroup} withoutGroups={props.withoutGroups} />
      </AdvancedSearchContainer>
    </Details>

export default AdvancedSearchFilter;
