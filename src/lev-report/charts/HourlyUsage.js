import React from 'react';
import { VictoryAxis, VictoryChart, VictoryLegend, VictoryLine, VictoryTheme } from 'victory';

export const ticks = Array.from({ length: 25 }, (_, h) => h).filter(n => !(n % 3));
export const max = a => Math.max(...a.map(l => l.count));
export const sort = a => a.sort((a1, a2) => a2.high - a1.high);

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
	<VictoryLegend
		x={50} y={15}
		orientation="vertical"
		gutter={20}
		style={{ right: 0 }}
		data={sort(traces.map(({ name, data, colour }) => ({
			name,
			labels: { fill: colour || 'grey' }, symbol: { fill: 'none' },
			high: max(data)
		})))}
	/>
	{traces.map(t => <VictoryLine
		key={t.name}
		name={t.name}
		interpolation="natural"
		data={t.data}
		style={{ data: { stroke: t.colour || 'grey' } }}
		x="hour"
		y="count"
	/>)}
</VictoryChart> || null;

export default HourlyUsage;
