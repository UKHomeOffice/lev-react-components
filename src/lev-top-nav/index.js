import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import TopNav, { asTopNavAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asTopNavAnchor(Link);
const NavLink= asNavLinkAnchor(Link);
const NavAnchor= asNavLinkAnchor('a');

import styled from 'styled-components';

const WideTopNav = styled(TopNav)`
  > div {
    max-width: none;
  }

  ul {
    width: 100%;

    li:last-child {
      margin: -1.9em 0 0 auto;
    }
  }
`;

const WideTopNavWrapper = styled.div`
  > div {
    max-width: none;
  }
`;

const HOTopNavWrapper = styled(WideTopNavWrapper)`
  > div {
    border-color: #9325b2;
  }
`;

const LevTopNav = props => {
  const IconTitle = <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>{props.companyText}</TopNav.IconTitle>;
  const CompanyLink = props.companyLink ? <LogoLink to={props.companyLink}>{IconTitle}</LogoLink> : IconTitle;

  const ServiceTitleLink = (
    <NavLink to={props.serviceTitleLink}>
      {props.serviceTitleText}
    </NavLink>
  );

  let TopNavWrapper = WideTopNavWrapper;
  switch (props.department) {
    case 'HMPO':
    case 'Home Office':
      TopNavWrapper = HOTopNavWrapper;
      break;
  }

  const link = props.links.map(e => <NavLink to={e.link}>{e.text}</NavLink>);

  return <BrowserRouter>
    <TopNavWrapper>
      <WideTopNav company={CompanyLink} serviceTitle={ServiceTitleLink} {...props}>
        {props.links.map(e => <NavLink to={e.link}>{e.text}</NavLink>)}
        {props.children}
        {props.signOutLink && <NavAnchor href={props.signOutLink}>{props.signOutText}</NavAnchor>}
      </WideTopNav>
    </TopNavWrapper>
  </BrowserRouter>;
};

LevTopNav.defaultProps = {
  companyText: '',
  serviceTitleLink: '/',
  serviceTitleText: '',
  signOutText: 'Sign out',
  links: []
};

export default LevTopNav;
export { asTopNavAnchor, asNavLinkAnchor };
