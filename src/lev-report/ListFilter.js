 import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const StyledListFilter = styled(InputField)`
  display: inline-block;
  max-width: 15em;
  width: 15em;
  margin-right: 2em;
`;

const ListFilter = ({ hint, children, input}) =>
<StyledListFilter
    hint={hint}
    input={{
        ...input,
        list: "list"
    }}
    >
    <datalist id="list">
        {input.groups.map((item) =>
          <option value={item.name.replace(/\//g, '')}></option>
        )}
     </datalist>
    {children}
</StyledListFilter>

export default ListFilter;