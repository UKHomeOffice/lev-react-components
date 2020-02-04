import React from 'react';
import styled from 'styled-components';
import DashboardCounter from "./DashboardCounter";
import CostSavingCounter from "./CostSavingCounter";

const DashboardDiv = styled.div`
`;

const CountDiv = styled.div`
  display: flex;
`;

const REFRESH = 10 * 1000;
const FRAMES = 4;
const DURATION = 1500;
const UPDATE_COUNTER_URL = '/dashboard/data';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaySearches: props.todaySearches,
      allTime: props.allTime,
    };
    this.animateIDs = [];
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateCounter(), REFRESH);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.stopAnimation();
  }

  stopAnimation() {
    this.animateIDs.forEach(id => clearTimeout(id));
  }

  animateUpdate(todayOld, todayNew, allOld, allNew) {
    this.stopAnimation();
    const todayDiff = todayNew < todayOld ? todayNew : todayNew - todayOld;
    const allDiff = allNew - allOld;
    this.setState({
      todaySearches: todayNew < todayOld ? (todayOld = 0) : todayOld + Math.round(todayDiff / FRAMES),
      allTime: allOld + Math.round(allDiff / FRAMES)
    });
    this.animateIDs = Array.from({ length: FRAMES - 1 },(f, i) =>
      setTimeout(() => this.setState({
        todaySearches: todayOld + Math.round((todayDiff / (FRAMES - i))),
        allTime: allOld + Math.round(allDiff / (FRAMES - i))
      }), Math.round(DURATION / (FRAMES - i)))
    );
    this.animateIDs.push(setTimeout(() => {
      this.stopAnimation();
      this.setState({
        todaySearches: todayNew,
        allTime: allNew
      })
    }, DURATION));
  }

  updateCounter() {
    const xhttp = new XMLHttpRequest();
    const dash = this;
    xhttp.onreadystatechange = function stateChanged() {
      if (this.readyState === 4 && this.status === 200) {
        try {
          const json = JSON.parse(xhttp.responseText);
          if (dash.state.todaySearches !== json.todaySearches) {
            dash.animateUpdate(dash.state.todaySearches, json.todaySearches, dash.state.allTime, json.allTime);
          }
        }
        catch (e) {
          console.error('Error parsing dashboard data:', e);
        }
      }
    };
    xhttp.open('GET', UPDATE_COUNTER_URL, true);
    xhttp.send();
  }

  render() {
    return <DashboardDiv>
      <CostSavingCounter group="customers" count='100000' />
    <CountDiv id="dashboard">
      <DashboardCounter period="searches today" count={this.state.todaySearches} />
      <DashboardCounter period="searches all time" count={this.state.allTime} />
    </CountDiv>
    </DashboardDiv>
  }
}

export default DashboardContent;
