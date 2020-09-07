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

  it('contains 3 links with page-link class', () => {
    let links = root.findAllByProps({className: "page-link"});
    expect(links.length).toBe(3);
  })

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
});
