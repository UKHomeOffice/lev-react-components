import React from 'react';
import { H1, Page } from 'govuk-react';
import LevTopNav, { asTopNavAnchor, asNavLinkAnchor } from '../lev-top-nav';
import LevFooter from '../lev-footer';
import WideWidthContainer from '../wide-width-container';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props => props.font || 'Arial, Helvetica, sans-serif'};
    ${({ styles }) => styles ? (Array.isArray(styles) ? styles.join('\n') : styles) : ''}
  }
`;

const LevPage = ({ topnav, footer, footerContent, title, font, bodyStyles, children, ...props }) => {
  const Header = <LevTopNav { ...topnav } />;
  const Footer = (footer || footerContent) ? <LevFooter { ...footer } >{footerContent}</LevFooter> : null;

  return <Page footer={Footer} header={Header} container={WideWidthContainer} { ...props }>
    <GlobalStyles font={font} styles={bodyStyles} />
    { children || <H1>{title}</H1> }
  </Page>;
};

LevPage.defaultProps = {
  topnav: {
    companyText: '',
    department: 'HMPO',
    links: [],
    serviceTitleText: 'Life Event Verification',
    signOutLink: 'oauth/logout'
  },
  footerContent: undefined
};

export default LevPage;
