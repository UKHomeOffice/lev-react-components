import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from 'victory';

const hours = Array.from({ length: 25 }, (_, h) => h);
const ticks = hours.filter(n => !(n % 3));

const HourlyUsage = ({ traces }) => traces && traces.length &&
<VictoryChart
	padding={{ top: 10, bottom: 50, left: 50, right: 5 }}
	domainPadding={20}
	theme={VictoryTheme.material}
	style={{ labels: { fontSize: 10 } }}
	height={250}
	width={600}
>
	<VictoryAxis
		domain={[0, 24]}
		tickValues={ticks}
		tickFormat={t => (t < 10 ? '0' + t : t) + ':00'}
		style={{ tickLabels: { fontSize: 10 } }}
	/>
	<VictoryAxis dependentAxis />
	{traces.map(t => <VictoryLine
		key={t.name}
		name={t.name}
		colorScale="cool"
		interpolation="natural"
		data={t.data}
		x="hour"
		y="count"
	/>)}
</VictoryChart> || null;

export default HourlyUsage;
