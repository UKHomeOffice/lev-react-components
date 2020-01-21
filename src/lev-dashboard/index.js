import React from 'react';

import LevPage from '../lev-page';
import DashboardContent from "./DashboardContent";

const LevDashboard = (props) =>
<LevPage
  title="LEV Dashboard"
  topnav={{
    department: 'HMPO',
    serviceTitleText: 'Life Event Verification - Dashboard',
    signOutLink: 'oauth/logout'
  }}
  bodyStyles='background-color: black;'
>
  <script dangerouslySetInnerHTML={{ __html: `window.dashboardProps=${JSON.stringify(props)};` }}></script>
  <script src="/public/js/bundle.js"></script>
  <DashboardContent todaySearches={props.todaySearches} allTime={props.allTime} />
</LevPage>;

export default LevDashboard;
