const moment = require('moment');
import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTheme } from 'victory';

const days = t => moment(t).format('Do MMM');
const qtr  = t => {
  const m = moment(t);
  if (m.weekday() === 1) {
    return m.format('ddd D MMM');
  }
};
const year = t => {
  const m = moment(t);
  if (m.date() === 1) {
    return m.format(m.month() ? 'MMMM' : 'MMMM \'YY');
  }
};
const tickFormat = n => n < 33 ? days : n < 95 ? qtr : year;

const CustomLabel = ({ freq, ...props }) => (freq < 33) || (freq > 150) ?
  <g transform={`rotate(-45 ${props.x} ${1.1 * props.y})`}><VictoryLabel { ...props } /></g> :
  <VictoryLabel { ...props } />;

const datatypeBar = ({ name, dailyUsage }) => dailyUsage && dailyUsage.length && <VictoryBar
  key={name}
  data={dailyUsage}
  x="date"
  y="usage"
  barRatio={0.9}
  alignment="start"
/> || null;

const LevUsage = ({ datasets, dates }) => datasets && datasets.length &&
<VictoryChart
  padding={{ top: 10, bottom: 50, left: 50, right: 5 }}
  domainPadding={20}
  theme={VictoryTheme.material}
  style={{ labels: { fontSize: 15 } }}
  height={250}
  width={600}
>
  <VictoryAxis
    domain={[dates[0], dates[dates.length - 1] + 86400000]}
    tickValues={dates.filter(tickFormat(dates.length))}
    tickFormat={tickFormat(dates.length)}
    tickLabelComponent={<CustomLabel freq={dates.length} />}
    style={{ tickLabels: { fontSize: 10 } }}
  />
  <VictoryAxis dependentAxis />
  <VictoryStack
    colorScale="cool"
    barRatio={0.9}
  >
    {datasets.map(datatypeBar)}
  </VictoryStack>
</VictoryChart> || 'No data was found';

export default LevUsage;
