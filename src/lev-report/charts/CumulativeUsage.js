import React from 'react';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from 'victory';
const moment = require('moment');

const M = 1000 * 1000;
export const maxDomain = data => Math.ceil(data[data.length - 1].count / M);
export const ticks = data => [...Array(maxDomain(data) + 1).keys()];

const CumulativeUsage = ({ data }) => data && data.length &&
<VictoryChart
		padding={{ top: 10, bottom: 50, left: 50, right: 5 }}
		domainPadding={20}
		theme={VictoryTheme.material}
		style={{ labels: { fontSize: 10 } }}
		height={250}
		width={600}
>
	<VictoryAxis
			domain={[moment(data[0].month).unix(), moment(data[data.length - 1].month).unix()]}
			tickValues={data.map(d => moment(d.month).unix())}
			tickFormat={tick => {
				const date = moment.unix(tick);
				const month = date.month();
				return month ? month % 3 === 0 ? `Q${date.quarter()}` : '' : `'${date.format('YY')}`;
			}}
			style={{ tickLabels: { fontSize: 10 } }}
	/>
	<VictoryAxis
			dependentAxis
			tickFormat={t => `${t / M}M`}
	/>
	<VictoryArea
			key="CumulativeUsage"
			name="CumulativeUsage"
			interpolation="natural"
			data={data}
			style={{ data: {
					fill: "#2746B9",
					fillOpacity: 0.2,
					stroke: '#2746B9'
			} }}
			x={d => moment(d.month).unix()}
			y="count"
	/>
</VictoryChart> || null;

export default CumulativeUsage;