import React from 'react';
import History from "../../src/lev-report/History";
import data from "./history.fixture";
import renderer from 'react-test-renderer';

describe('component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<History data={data}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
