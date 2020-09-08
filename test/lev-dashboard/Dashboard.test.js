import React from 'react';
import LevDashboard from "../../src/lev-dashboard";
import renderer from 'react-test-renderer';
import data from './dashboard.fixture';
import 'jest-styled-components';

describe('component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LevDashboard customerCostSaving={data.customerCostSaving}
                                               todaySearches={data.todaySearches} allTime={data.allTime}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
