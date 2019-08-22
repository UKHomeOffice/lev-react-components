import React from 'react';
import LevPage from '../lev-page';
import ReportFilters from './ReportFilters';
import LevUsage from './charts/LevUsage';
import UsageByGroup from "./grid/UsageByGroup";

class LevReport extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        from: props.from,
        to: props.to,
        values: '',
        dates: props.dates,
        datasets: props.datasets,
        dailyUsage: props.dailyUsage,
        groups: props.groups,
        totals: props.totals
      };
  }

  updateFrom(e) {
    this.setState({ from: e.target.value });
  }

  updateTo(e) {
    this.setState({ to: e.target.value });
  }

  handleSubmit(e) {
    // e.preventDefault();
    // const from = moment(this.state.from).format(SHORT_FORMAT);
    // const to = moment(this.state.to).format(SHORT_FORMAT);
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
      <LevUsage dates={this.state.dates} datasets={this.state.datasets} />
      <UsageByGroup datasets={this.state.datasets} groups={this.state.groups} totals={this.state.totals} />
    </LevPage>;
  }
}

export default LevReport;
