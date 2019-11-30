import React from 'react';
import styled from 'styled-components';
import DashboardCounter from "./DashboardCounter";

const CountDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaySearches: props.todaySearches,
      allTime: props.allTime,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateCounter(), REFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.stopAnimation();
  }

  updateCounter() {
    const xhttp = new XMLHttpRequest();
    const dash = this;
    xhttp.onreadystatechange = function stateChanged() {
      if (this.readyState === 4 && this.status === 200) {
        const json = JSON.parse(xhttp.responseText);
        if (dash.state.todaySearches !== json.todaySearches) {
          dash.setState({
            todaySearches: json.todaySearches,
            allTime: json.allTime
          });
        }
      }
    };
    xhttp.open('GET', 'http://localhost:4000/dashboard/data', true);
    xhttp.send();
  }

  render() {
    return <CountDiv id="dashboard">
      <DashboardCounter period="searches today" count={this.state.todaySearches} />
      <DashboardCounter period="searches all time" count={this.state.allTime} />
    </CountDiv>;
  }
}

export default DashboardContent;
