import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const StyledDataList = styled(InputField)`
  display: inline-block;
  max-width: 15em;
  width: 15em;
  margin-right: 2em;
`;

const ListFilter = ({ hint, children, input}) =>
<StyledDataList
    hint={hint}
    input={{
        ...input,
        list: "list"
    }}
    >
    <datalist id="list">
        {input.groups.map((item) =>
          <option value={item.name}></option>
        )}
     </datalist>
    {children}
</StyledDataList>

export default ListFilter;
