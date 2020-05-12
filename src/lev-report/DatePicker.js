import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const StyledDatePicker = styled(InputField)`
  display: inline-block;
  margin-right: 2em;
  max-width: 15em;
  width: 13em;
`;

const DatePicker = ({ hint, children, input, ...meta }) =>
<StyledDatePicker
  hint={hint || 'Pick a date'}
  input={{
    type: 'date',
    ...input,
    meta: { ...meta }
  }}
  >
  {children}
</StyledDatePicker>;

export default DatePicker;
