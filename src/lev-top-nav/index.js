import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import TopNav, { asTopNavAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asTopNavAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const LevTopNav = props => {
  const CompanyLink = (
    <LogoLink to={props.companyLink}>
      <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>{props.companyTitle}</TopNav.IconTitle>
    </LogoLink>
  );

  const ServiceTitleLink = (
    <NavLink to={props.serviceLink}>
      {props.serviceTitle}
    </NavLink>
  );

  return <BrowserRouter>
    <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
  </BrowserRouter>;
}

LevTopNav.defaultProps = {
  companyLink: '/',
  companyTitle: '',
  serviceLink: '/',
  serviceTitle: ''
};

export default LevTopNav;
