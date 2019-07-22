const moment = require('moment');
import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTheme } from 'victory';

const SHORT_DATE = 'D/M/YY';
const SERVER_FORMAT = 'YYYY-MM-DD';

const days = t => moment(t).format('D MMM');
const qtr  = t => {
  const m = moment(t);
  if (m.weekday() === 1) {
    return m.format('ddd D MMM');
  }
};
const year = t => {
  const m = moment(t);
  if (m.date() === 1) {
    return m.format('MMMM');
  }
};
const tickFormat = n => n < 45 ? days : n < 95 ? qtr : year;

const datatypeBar = data => data && data.length && <VictoryBar
  data={data}
  x="date"
  y="usage"
  labels={(d) => d.usage}
  style={{ labels: { fill: "white" } }}
  barRatio={0.9}
/> || null;

const LevUsage = props => ((props.birth && props.birth.length) || (props.death && props.death.length) ||
  (props.marriage && props.marriage.length) || (props.partnership && props.partnership.length)) &&
<VictoryChart
  domainPadding={20}
  theme={VictoryTheme.material}
  style={{ labels: { fontSize: 15 } }}
  height={250}
  width={600}
>
  <VictoryAxis
    domain={[props.dates[0], props.dates[props.dates.length - 1]]}
    tickValues={props.dates.filter(tickFormat(props.dates.length))}
    tickFormat={tickFormat(props.dates.length)}
  />
  <VictoryAxis dependentAxis />
  <VictoryStack
    colorScale="cool"
    barRatio={0.9}
    style={{
      labels: {
        fontSize: 9,
        fill: 'white',
        padding: 15
      }
  }}>
    {datatypeBar(props.birth)}
    {datatypeBar(props.death)}
    {datatypeBar(props.marriage)}
    {datatypeBar(props.partnership)}
  </VictoryStack>
</VictoryChart> || 'No data was found';

export default LevUsage;
