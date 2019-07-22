import React from 'react';
import styled from 'styled-components';
import { Main } from 'govuk-react';
import LevPage from '../lev-page';
import ReportFilters from "./ReportFilters";
import LevUsage from "./charts/LevUsage";
const moment = require('moment');

const SHORT_FORMAT = 'D/M/YYYY';

const rand = n => Math.round(Math.random() * n);

const FullWidthMain = styled(Main)`
  & > div > div {
    max-width: 100%;
    width: 100%;
  }
`;

class LevReport extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        from: '',
        to: '',
        values: '',
        birth: props.birth,
        death: props.death,
        marriage: props.marriage,
        partnership: props.partnership,
        dates: props.dates,
        totalBirths: props.birth.reduce((t, n) => t + n.usage, 0),
        totalDeaths: props.death.reduce((t, n) => t + n.usage, 0),
        totalMarriages: props.marriage.reduce((t, n) => t + n.usage, 0),
        totalPartnerships: props.partnership.reduce((t, n) => t + n.usage, 0)
      };
  }

  updateFrom(e) {
    this.setState({ from: e.target.value });
  }

  updateTo(e) {
    this.setState({ to: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const from = moment(this.state.from).format(SHORT_FORMAT);
    const to = moment(this.state.to).format(SHORT_FORMAT);
    this.setState({ values: `Show usage from ${from} to ${to}` });
    this.setState({
      birth: [
        {date: '2019-06-30', usage: rand(1500)},
        {date: '2019-07-01', usage: rand(1500)},
        {date: '2019-07-02', usage: rand(1500)},
        {date: '2019-06-29', usage: rand(1500)}
      ],
      death: [
        {date: '2019-06-29', usage: rand(200)},
        {date: '2019-06-30', usage: rand(200)},
        {date: '2019-07-01', usage: rand(200)},
        {date: '2019-07-02', usage: rand(200)}
      ],
      marriage: [
        {date: '2019-06-29', usage: rand(50)},
        {date: '2019-06-30', usage: rand(50)},
        {date: '2019-07-01', usage: rand(50)},
        {date: '2019-07-02', usage: rand(50)}
      ],
      partnership: [
        {date: '2019-06-29', usage: rand(24)},
        {date: '2019-06-30', usage: rand(24)},
        {date: '2019-07-01', usage: rand(24)},
        {date: '2019-07-02', usage: rand(24)}
      ],
      dates: ['2019-06-29', '2019-06-30', '2019-07-01', '2019-07-02']
    });
  }

  render() {
    return <LevPage
      title="LEV Report"
      topnav={{
        department: 'HMPO',
        serviceTitleText: 'Life Event Verification - Report',
        signOutLink: 'oauth/logout'
      }}
    >
      <ReportFilters
        from={this.state.from}
        to={this.state.to}
        onSubmit={this.handleSubmit.bind(this)}
        updateFrom={this.updateFrom.bind(this)}
        updateTo={this.updateTo.bind(this)} />
      <FullWidthMain>
        <LevUsage
          birth={this.state.birth}
          death={this.state.death}
          marriage={this.state.marriage}
          partnership={this.state.partnership}
          dates={this.state.dates}
        />
        <p>Total birth usage: {this.state.totalBirths}</p>
        <p>Total death usage: {this.state.totalDeaths}</p>
        <p>Total marriage usage: {this.state.totalMarriages}</p>
        <p>Total partnership usage: {this.state.totalPartnerships}</p>
        <p>Total across all data: {this.state.totalBirths + this.state.totalDeaths + this.state.totalMarriages + this.state.totalPartnerships}</p>
        <pre>{JSON.stringify(this.state, 0, 2)}</pre>
      </FullWidthMain>
    </LevPage>;
  }
}

export default LevReport;
