import React from 'react';
import { H1, Page } from 'govuk-react';
import LevTopNav, { asTopNavAnchor, asNavLinkAnchor } from '../lev-top-nav';
import LevFooter from '../lev-footer';
import WideWidthContainer from '../wide-width-container';

const LevPage = props => {
  const Header = <LevTopNav {...props.topnav} />;
  const Footer = <LevFooter />;

  return <Page footer={Footer} header={Header} container={WideWidthContainer} {...props} >
    { props.children || <H1>{props.title}</H1> }
  </Page>;
};

LevPage.defaultProps = {
  topnav: {
    companyText: '',
    department: 'HMPO',
    links: [],
    serviceTitleText: 'Life Event Verification',
    signOutLink: 'oauth/logout'
  }
};

export default LevPage;
