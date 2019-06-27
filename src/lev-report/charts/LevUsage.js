const moment = require('moment');
import React from 'react';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryStack, VictoryTheme } from 'victory';

const SHORT_DATE = 'D/M/YY';
const SERVER_FORMAT = 'YYYY-MM-DD';

const days = t => moment(t).format('D MMM');
const qtr  = t => {
  const m = moment(t);
  if (m.weekday() === 1) {
    return m.format('Mon D MMM');
  }
};
const year = t => moment(t).format('MMMM');
const ticks = n => n < 45 ? days : n < 95 ? qtr : year;

const LevUsage = props => ((props.birth && props.birth.length) || (props.death && props.death.length) ||
  (props.marriage && props.marriage.length) || (props.partnership && props.partnership.length)) &&
<VictoryChart
  domainPadding={20}
  theme={VictoryTheme.material}
>
  <VictoryAxis
    label="Date"
    domain={[props.dates[0], props.dates[props.dates.length - 1]]}
    tickValues={props.dates}
    tickFormat={ticks(props.dates.length)}
  />
  <VictoryAxis dependentAxis label="Usage count" />
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
    {props.birth && props.birth.length && <VictoryBar
      data={props.birth}
      x="date"
      y="usage"
      labels={(d) => d.usage}
      style={{ labels: { fill: "white" } }}
      labelComponent={<VictoryLabel dy={25}/>}
      barRatio={0.9}
    /> || null}
    {props.death && props.death.length && <VictoryBar
      data={props.death}
      x="date"
      y="usage"
      labels={(d) => d.usage}
      style={{ labels: { fill: "white" } }}
      labelComponent={<VictoryLabel dy={25}/>}
      barRatio={0.9}
    /> || null}
    {props.marriage && props.marriage.length && <VictoryBar
      data={props.marriage}
      x="date"
      y="usage"
      labels={(d) => d.usage}
      style={{ labels: { fill: "white" } }}
      labelComponent={<VictoryLabel dy={25}/>}
      barRatio={0.9}
    /> || null}
    {props.partnership && props.partnership.length && <VictoryBar
      data={props.partnership}
      x="date"
      y="usage"
      labels={(d) => d.usage}
      style={{ labels: { fill: "white" } }}
      labelComponent={<VictoryLabel dy={25}/>}
      barRatio={0.9}
    /> || null}
  </VictoryStack>
</VictoryChart> || 'No data was found';

export default LevUsage;
