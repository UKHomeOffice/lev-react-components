import React from 'react';
import LevPage from '../lev-page';
import ReportFilters from './ReportFilters';
import LevUsage from './charts/LevUsage';
import UsageByGroup from "./grid/UsageByGroup";
import UsageCounter from './UsageCounter';
import styled from 'styled-components';
import HourlyUsage from "./charts/HourlyUsage";

const RelativeParent = styled.div`
  position: relative;
`;

const CountDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

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
      hourlyUsage: props.hourlyUsage,
      groups: props.groups,
      totals: props.totals,
      currentGroup: props.currentGroup,
      total: props.total,
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
      <RelativeParent>
        <ReportFilters
          from={this.state.from}
          to={this.state.to}
          onSubmit={this.handleSubmit.bind(this)}
          updateFrom={this.updateFrom.bind(this)}
          updateTo={this.updateTo.bind(this)}
          groups={this.state.groups}
          currentGroup={this.state.currentGroup}
        />
        <CountDiv>
          <UsageCounter count={this.state.total}
                        from={this.state.from} to={this.state.to}
                        group={this.state.currentGroup}/>
        </CountDiv>
      </RelativeParent>
      <LevUsage dates={this.state.dates} datasets={this.state.datasets}/>
      <HourlyUsage traces={this.state.hourlyUsage} />
      <UsageByGroup datasets={this.state.datasets} groups={this.state.groups} totals={this.state.totals}/>
    </LevPage>;
  }
}

export default LevReport;
