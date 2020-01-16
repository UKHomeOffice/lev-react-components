import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const StyledInputField = styled(InputField)`
  display: inline-block;
  max-width: 15em;
  width: 15em;
  margin-right: 2em;
`;

const GroupFilter = ({ hint, children, input}) =>
<StyledInputField
    hint={hint}
    input={{
        ...input,
        list: 'group-list'
    }}
    >
    <datalist id="group-list">
        {input.groups.map((item) =>
          <option value={item.name}></option>
        )}
     </datalist>
    {children}
</StyledInputField>;

export default GroupFilter;
