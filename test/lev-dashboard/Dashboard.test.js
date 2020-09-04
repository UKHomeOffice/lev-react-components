import React from 'react';
import LevDashboard from "../../src/lev-dashboard";
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import data from './dashboard.fixture';

describe('component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LevDashboard props={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
