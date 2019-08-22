const moment = require('moment');
import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTheme } from 'victory';

const SHORT_DATE = 'D/M/YY';
const SERVER_FORMAT = 'YYYY-MM-DD';

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

const datatypeBar = data => data && data.length && <VictoryBar
  data={data}
  x="date"
  y="usage"
  barRatio={0.9}
/> || null;

const LevUsage = ({ datasets, dates, ...props }) => datasets && datasets.length &&
<VictoryChart
  padding={{ top: 0, bottom: 50, left: 50, right: 0 }}
  domainPadding={20}
  theme={VictoryTheme.material}
  style={{ labels: { fontSize: 15 } }}
  height={250}
  width={600}
>
  <VictoryAxis
    domain={[dates[0], dates[dates.length - 1]]}
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
    {datasets.map(d => datatypeBar(d.dailyUsage))}
  </VictoryStack>
</VictoryChart> || 'No data was found';

export default LevUsage;
