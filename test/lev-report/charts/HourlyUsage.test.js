import React from 'react';
import HourlyUsage from '../../../src/lev-report/charts/HourlyUsage';
import renderer from 'react-test-renderer';
import { renderToString } from "react-dom/server";

const data = [
	{ name: 'weekday', data: [
		{ hour: 0, count: 0 }, { hour: 1, count: 0 }, { hour: 2, count: 0 }, { hour: 3, count: 0 }, { hour: 4, count: 0 },
		{ hour: 5, count: 10 }, { hour: 6, count: 24 }, { hour: 7, count: 150 }, { hour: 8, count: 345 },
		{ hour: 9, count: 534 }, { hour: 10, count: 678 }, { hour: 11, count: 718 }, { hour: 12, count: 780 },
		{ hour: 13, count: 670 }, { hour: 14, count: 603 }, { hour: 15, count: 598 }, { hour: 16, count: 578 },
		{ hour: 17, count: 378 }, { hour: 18, count: 278 }, { hour: 19, count: 136 }, { hour: 20, count: 53 },
		{ hour: 21, count: 13 }, { hour: 22, count: 5 }, { hour: 23, count: 0 }
		]
	},
	{ name: 'weekend', data: [
		{ hour: 0, count: 0 }, { hour: 1, count: 0 }, { hour: 2, count: 0 }, { hour: 3, count: 0 }, { hour: 4, count: 0 },
		{ hour: 5, count: 3 }, { hour: 6, count: 7 }, { hour: 7, count: 15 }, { hour: 8, count: 35 },
		{ hour: 9, count: 54 }, { hour: 10, count: 67 }, { hour: 11, count: 78 }, { hour: 12, count: 80 },
		{ hour: 13, count: 67 }, { hour: 14, count: 63 }, { hour: 15, count: 58 }, { hour: 16, count: 57 },
		{ hour: 17, count: 37 }, { hour: 18, count: 20 }, { hour: 19, count: 13 }, { hour: 20, count: 2 },
		{ hour: 21, count: 0 }, { hour: 22, count: 0 }, { hour: 23, count: 0 }
		]
	}
];
data[2] = { name: 'average', data: data[0].data.map(
	({hour, count}, i) => ({ hour, count: ((count*5) + (data[1].data[i].count*2)) / 7 })
) };
let success = false;

describe('HourlyUsage component', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<HourlyUsage traces={data} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
		success = true;
	});

	afterAll(() => {
		if (success && process.argv.includes('--visualise')) {
			const html = `<html>
			<head>
					<title>Component Preview</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body style="margin:0;">
					<div id="app">
						 ${renderToString(<HourlyUsage traces={data}/>)}
					</div>
			</body>
			</html>`;
			require('fs').writeFileSync('test/lev-report/charts/__snapshots__/HourlyUsage.html', html);
		}
	});
});
