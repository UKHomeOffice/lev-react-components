import React from 'react';
import { default as CumulativeUsage } from '../../../src/lev-report/charts/CumulativeUsage';
import renderer from 'react-test-renderer';
import visualise from '../../visualise';
import data from "../history.fixture";

describe('CumulativeUsage', () => {
	describe('component', () => {
		it('renders correctly', () => {
			const tree = renderer.create(<CumulativeUsage data={data}/>).toJSON();
			expect(tree).toMatchSnapshot();
		});
		visualise(<CumulativeUsage data={data}/>, 'test/lev-report/charts/__snapshots__/CumulativeUsage.html');
	});
});
