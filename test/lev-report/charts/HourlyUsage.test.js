import React from 'react';
import { default as HourlyUsage, ticks, max, sort } from '../../../src/lev-report/charts/HourlyUsage';
import renderer from 'react-test-renderer';
const visualise = require('../../visualise');

const traces = [
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
traces[2] = { name: 'average', data: traces[0].data.map(
	({hour, count}, i) => ({ hour, count: ((count*5) + (traces[1].data[i].count*2)) / 7 })
) };

describe('HourlyUsage', () => {
	describe('helper', () => {
		describe('ticks', () => {
			it('should be an array of numbers', () => expect(ticks).toStrictEqual([0, 3, 6, 9, 12, 15, 18, 21, 24]));
		});
		describe('max', () => {
			it('should take a data list and return the highest count', () => {
				expect(max(traces[0].data)).toBe(780);
				expect(max(traces[1].data)).toBe(80);
			});
		});
		describe('sort', () => {
			it('should order the traces according to their data', () =>
				expect(sort([{high: 3}, {high: 7}, {high: 2}])).toStrictEqual([{high: 7}, {high: 3}, {high: 2}]));
		});
	});

	describe('component', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<HourlyUsage traces={traces}/>).toJSON();
			expect(tree).toMatchSnapshot();
		});
		visualise(<HourlyUsage traces={traces}/>, 'test/lev-report/charts/__snapshots__/HourlyUsage.html');
	});
});
