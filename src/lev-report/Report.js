import React from 'react';
import { Main } from 'govuk-react';
import LevPage from '../lev-page';
import ReportControls from "./ReportControls";
import LevUsage from "./charts/LevUsage";
const moment = require('moment');

const SHORT_FORMAT = 'D/M/YYYY';

const vals = (from, to) => `Show usage from ${from}${to ? (' to ' + to) : ''}`;

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.from || '',
      to: props.to || '',
      values: (props.from || props.to) ? vals(props.from, props.to) : '',
    };
  }

  onChange(range) {
    this.setState(range);
  }

  handleSubmit(e) {
    e.preventDefault();
    const from = moment(this.state.from).format(SHORT_FORMAT);
    const to = moment(this.state.to).format(SHORT_FORMAT);
      console.log('get data:', `http://localhost:4000/data?fromDate=${this.state.from}`);
    this.setState({ values: vals(from, to) });

    if (this.state.from && from.isValid) {
      console.log('get data:', `http://localhost:4000/data?fromDate=${this.state.from}`);
      const xhttp = this.xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function stateChanged() {
        if (this.xhttp.readyState === 4) {
          if (this.xhttp.status === 200) {
            this.state.data = JSON.parse(this.xhttp.responseText);
            // const layout = {
            //   title: `LEV usage ${dateDescription}`,
            //   barmode: 'stack'
            // };
            console.log(this.xhttp.responseText);
          } else {
            console.log('HTTP ERROR:', this.xhttp.status, this.xhttp.statusText);
          }
          // unblockForm();
        } else {
          console.log(`Update (${this.xhttp.readyState}):`, this.xhttp.status, this.xhttp.statusText);
        }
      }.bind(this);
      xhttp.open('GET', `http://localhost:4000/data?fromDate=${this.state.from}`, true);
      xhttp.send();
    }
  }

  render() {
    return <LevPage title="LEV Usage Report">
      <ReportControls
        from={this.state.from}
        to={this.state.to}
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.onChange.bind(this)} />
      <Main>
        <pre>{JSON.stringify(this.state.values, 0, 2)}</pre>
        <LevUsage data={this.state.data} layout={{ barmode: 'stack' }} />
      </Main>
    </LevPage>;
  }
}

export default Report;
