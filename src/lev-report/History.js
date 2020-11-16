import React from 'react';
import LevPage from '../lev-page';
import CumulativeUsage from "./charts/CumulativeUsage";

const History = props =>
<LevPage
    title="LEV Report"
    topnav={{
      department: 'HMPO',
      serviceTitleText: 'Life Event Verification - History',
      signOutLink: 'oauth/logout'
    }}
>
  <h2>Cumulative total searches</h2>
  <CumulativeUsage data={props.data} />
</LevPage>;

export default History;
