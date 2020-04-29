import React from 'react';
import styled from 'styled-components';
import { InputField } from 'govuk-react';

const RangeDiv = styled.div`
  display: inline-block;
  margin-right: 2em;
  position: relative;
  vertical-align: text-bottom;

  & > div {
    position: relative;
    display: inline-block;
    bottom: 0px;
  }
`;
const StyledDatePicker = styled.div`
  display: inline-block;
  margin-right: 0px;
  margin-left: 0px;
  max-width: 15em;
  min-width: 5em;
  width: 13em;

  span {
    padding-right: 1em;
  }
  #date-range-from input {
    border-right: none 0px;
  }
  #date-range-to input {
    border-left: none 0px;
  }
`;

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    if (props.onChange && typeof props.onChange !== 'function') {
      throw new Error('onChange prop MUST be a function');
    }
    this.state = {
      from: '',
      to: ''
    };
  }

  updateFrom(e) {
    this.setState({ from: e.target.value });
    this.props.onChange && this.props.onChange({
      from: this.state.from,
      to: this.state.to
    });
  }

  updateTo(e) {
    this.setState({ to: e.target.value });
    this.props.onChange && this.props.onChange({
      from: this.state.from,
      to: this.state.to
    });
  }

  render() {
    return <RangeDiv>
      <div>
        <StyledDatePicker id="date-range-from">
          <InputField
            hint={this.props.fromHint || 'Pick a start date'}
            input={{
              type: 'date',
              name: this.props.fromName || 'date-range-from',
              onChange: this.updateFrom.bind(this)
            }}
          >
            {this.props.children}
          </InputField>
        </StyledDatePicker>
      </div>
      <div>
        <StyledDatePicker id="date-range-to">
          <InputField
            hint={this.props.toHint || 'Pick an end date'}
            input={{
              type: 'date',
              name: this.props.toName || 'date-range-to',
              onChange: this.updateTo.bind(this)
            }}
          />
        </StyledDatePicker>
      </div>
    </RangeDiv>;
  }
}

export default DatePicker;
