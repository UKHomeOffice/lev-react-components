import React from 'react';
import { default as CumulativeUsage, maxDomain, ticks } from '../../../src/lev-report/charts/CumulativeUsage';
import renderer from 'react-test-renderer';
import moment from 'moment';
import visualise from '../../visualise';

const data = [];
for (let month = moment('2017-02'), count = 130; month.isBefore('2020-05'); month.add(1, 'month')) {
	data.push({ month: month.format('YYYY-MM'), count: Math.round(count *= 1.3) });
}

describe('CumulativeUsage', () => {
	describe('helper function', () => {
		describe('maxDomain', () => {
			it('should take a data list and return the bounding million', () => {
				expect(maxDomain(data.slice(0, 16))).toBe(1);
				expect(maxDomain(data)).toBe(4);
			});
		});
		describe('ticks', () => {
			it('should return an array of integers', () => {
				expect(ticks(data.slice(0, -3))).toStrictEqual([0, 1, 2]);
				expect(ticks(data)).toStrictEqual([0, 1, 2, 3, 4]);
			});
		});
	});

	describe('component', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<CumulativeUsage data={data}/>).toJSON();
			expect(tree).toMatchSnapshot();
		});
		visualise(<CumulativeUsage data={data}/>, 'test/lev-report/charts/__snapshots__/CumulativeUsage.html');
	});
});
