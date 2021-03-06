import React from 'react';
import CrownLogo from '@govuk-react/icon-crown';
import HOLogo from './home-office.svg';
import TopNav, { asTopNavAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asTopNavAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

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
  
  a.page-link {
    margin-right: 20px;
  }
  
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

const HOTopNavWrapper = styled(WideTopNavWrapper)`
  > div {
    border-color: #9325b2;
  }
`;

const StyledHOLogo = styled(HOLogo)`
  margin-top: -6px;
  margin-bottom: -12px;
`;

const LevTopNav = props => {
  let TopNavWrapper = WideTopNavWrapper;
  let Logo = CrownLogo;
  let logoWidth = 36;
  let logoHeight = 32;
  switch (props.department) {
    case 'HMPO':
    case 'Home Office':
      TopNavWrapper = HOTopNavWrapper;
      Logo = StyledHOLogo;
      logoHeight = 44;
      break;
  }

  const IconTitle = <TopNav.IconTitle
    icon={<Logo width={logoWidth} height={logoHeight}/>}>
    {props.companyText}
  </TopNav.IconTitle>;

  const CompanyLink = props.companyLink ? <LogoAnchor href={props.companyLink}>{IconTitle}</LogoAnchor> : IconTitle;

  const ServiceTitleLink = (
    <NavAnchor href={props.serviceTitleLink}>
      {props.serviceTitleText}
    </NavAnchor>
  );

  return <TopNavWrapper>
    <WideTopNav company={CompanyLink} serviceTitle={ServiceTitleLink} {...props}>
      {props.links.map(e =>
        <li key={e.text}><NavAnchor className="page-link" href={e.link} target={e.target}>{e.text}</NavAnchor></li>
      )}
      {props.children}
      {props.signOutLink && <NavAnchor href={props.signOutLink}>{props.signOutText}</NavAnchor>}
    </WideTopNav>
  </TopNavWrapper>;
};

LevTopNav.defaultProps = {
  companyText: '',
  serviceTitleLink: '/',
  serviceTitleText: '',
  signOutText: 'Sign out',
  links: [
    { link: '/', text: 'Report' },
    { link: '/history', text: 'History' },
    { link: '/dashboard', text: 'Dashboard' },
    { link: 'https://lev.homeoffice.gov.uk/audit/user-activity/', text: 'User Activity', target: "_blank"  },
  ]
};
export default LevTopNav;
export { asTopNavAnchor, asNavLinkAnchor };
