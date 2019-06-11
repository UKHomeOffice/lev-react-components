import React from 'react';
import { H1, Page } from 'govuk-react';
import LevTopNav, { asTopNavAnchor, asNavLinkAnchor } from '../lev-top-nav';
import LevFooter from '../lev-footer';
import WideWidthContainer from '../wide-width-container';

const TopNavAnchor = asTopNavAnchor('a');

const LevPage = props => {
  const Header = <LevTopNav {...props.topnav} >
      <TopNavAnchor href="/oauth/logout">Sign out</TopNavAnchor>
    </LevTopNav>;
  const Footer = <LevFooter />;

  return <Page footer={Footer} header={Header} container={WideWidthContainer} {...props} >
    { props.children || <H1>{props.title}</H1> }
  </Page>;
};

LevPage.defaultProps = {
  topnav: {
    companyText: '',
    serviceTitleText: 'Life Event Verification',
    department: 'HMPO',
    links: []
  }
};

export default LevPage;
