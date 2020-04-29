import React from 'react';
import styled from 'styled-components';
import { Checkbox, LabelText } from 'govuk-react';

const ContainerDiv = styled.div`
    display: inline-block;
`

const CheckboxDiv = styled.div`
  display: inline-block;
  max-height: 7em;
  width: 15em;
  margin-right: 2em;
  overflow: auto;
  vertical-align: bottom;
`;

const CheckBoxFilter = ({ children, groups }) =>
  <ContainerDiv>
  <LabelText>{children}</LabelText>
    <CheckboxDiv>
       {groups.map((item) =>
        <Checkbox id={item.name} name='withoutGroups' value={item.name} multiple>{item.name}</Checkbox>
      )}
    </CheckboxDiv>
  </ContainerDiv>
export default CheckBoxFilter;
