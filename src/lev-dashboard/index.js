import React from 'react';

import LevPage from '../lev-page';
import DashboardContent from "./DashboardContent";

const LevDashboard = (props) =>
        <LevPage
            title="LEV Index"
            topnav={{
                department: 'HMPO',
                serviceTitleText: 'Life Event Verification - Dashboard',
                signOutLink: 'oauth/logout'
            }}
        >
        <script src="/public/js/bundle.js"></script>
        <DashboardContent todaySearches={props.todaySearches} allTime={props.allTime} />
</LevPage>;

export default LevDashboard;
