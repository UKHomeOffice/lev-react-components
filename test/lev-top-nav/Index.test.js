import React from 'react';
import 'jest-styled-components';
import LevTopNav from "../../src/lev-top-nav/index";
import renderer from 'react-test-renderer';

describe('component', () => {
  let tree, root;
  beforeEach(() => {
    tree = renderer.create(<LevTopNav />);
    root = tree.root;
  });

  it('renders correctly', () => expect(tree.toJSON()).toMatchSnapshot());

  it('contains a report link', () => {
    let link = root.findByProps({className: "page-link", href: '/'});
    expect(link.props.children).toEqual('Report');
  });

  it('contains a dashboard link', () => {
    let link = root.findByProps({className: "page-link", href: '/dashboard'});
    expect(link.props.children).toEqual('Dashboard');
  });

  it('contains a history link', () => {
    let link = root.findByProps({className: "page-link", href: '/history'});
    expect(link.props.children).toEqual('History');
  });

  it('contains a link to the user activity report', () => {
    let link = root.findByProps({className: "page-link", href: 'https://lev.homeoffice.gov.uk/audit/user-activity/'});
    expect(link.props.children).toEqual('User Activity');
  });
});
