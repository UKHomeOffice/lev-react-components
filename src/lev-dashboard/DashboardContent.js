import React from 'react';
import styled from 'styled-components';
import DashboardCounter from "./DashboardCounter";

const CountDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

class DashboardContent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            todaySearches: props.todaySearches,
            allTime: props.allTime,
        };
    }
    render() {
        return  <CountDiv id="dashboard">
                <DashboardCounter id="daily" period="searches today" count={this.state.todaySearches}/>
                <DashboardCounter id="allTime" period="searches all time" count={this.state.allTime}/>
                </CountDiv>;
    }
}

export default DashboardContent;
