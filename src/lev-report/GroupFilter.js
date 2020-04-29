import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const StyledInputField = styled(InputField)`
  display: inline-block;
  max-width: 15em;
  width: 13em;
  margin-right: 2em;
`;

const GroupFilter = ({ hint, children, input, groups, selectedGroup, name }) =>
  <StyledInputField
    hint={hint}
    input={{
      ...input,
      list: 'group-list',
      value: selectedGroup,
      name
    }}
  >
    <datalist id="group-list">
      {groups.map((item) =>
        <option key={item.name} value={item.name}></option>
      )}
    </datalist>
    {children}
  </StyledInputField>;

export default GroupFilter;
