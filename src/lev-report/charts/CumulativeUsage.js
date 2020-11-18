import React from 'react';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryTheme } from 'victory';
const moment = require('moment');

const M = 1000 * 1000;

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
			domain={[data[0].month, data[data.length - 1].month]}
			tickValues={data.map(d => d.month)}
			tickFormat={tick => {
				const date = moment.unix(tick);
				const month = date.month();
				return month ? ((month % 3 === 0) ? `Q${date.quarter()}` : '') : date.format('YYYY');
			}}
			style={{
				grid: {
					stroke: tick => ({
						0: 'grey',
						3: 'lightgrey',
						6: 'lightgrey',
						9: 'lightgrey'
					})[moment.unix(tick).month()] || '#ECEFF1'
				},
				ticks: {
					stroke: tick => moment.unix(tick).month() ? 'grey' : 'black',
					size: tick => (moment.unix(tick).month() % 3 === 0) ? 6 : 3
				},
				tickLabels: { fontSize: 10 }
			}}
	/>
	<VictoryAxis
			dependentAxis
			tickFormat={t => `${t / M}M`}
			style={{ grid: { stroke: 'lightgrey' } }}
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
			x="month"
			y="count"
	/>
</VictoryChart> || null;

export default CumulativeUsage;