import React from 'react';
import styled from 'styled-components';
import { Checkbox, LabelText } from 'govuk-react';

const CheckboxContainerDiv = styled.div`
  flex: 0 1 auto;
`;

const CheckBoxFilter = ({ groups, children }) =>
  <CheckboxContainerDiv>
    <LabelText>{children}</LabelText>
     {groups.map((item) =>
      <Checkbox id={item.name} name='withoutGroups' value={item.name} multiple>{item.name}</Checkbox>
      )}
  </CheckboxContainerDiv>

export default CheckBoxFilter;
