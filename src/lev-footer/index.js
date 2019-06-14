import React from 'react';
import styled from 'styled-components';
import WideWidthContainer from '../wide-width-container';
import Footer from '@govuk-react/footer';
import { spacing, typography } from '@govuk-react/lib';
import { FOOTER_BACKGROUND, FOOTER_TEXT, FOOTER_BORDER_TOP } from 'govuk-colours';

const FooterContainer = styled('footer')(
  {
    borderTop: `1px solid ${FOOTER_BORDER_TOP}`,
    background: `${FOOTER_BACKGROUND}`,
    color: `${FOOTER_TEXT}`
  },
  typography.font({ size: 16 }),
  spacing.withWhiteSpace({ padding: [{ size: 7, direction: 'top' }, { size: 5, direction: 'bottom' }] })
);

const LevFooter = ({ children, container: Container, ...props }) => <FooterContainer role="contentinfo" {...props}>
    <Container>
      {children}
    </Container>
  </FooterContainer>;

LevFooter.defaultProps = {
  children: undefined,
  container: WideWidthContainer
};

LevFooter.Link = Footer.Link;
LevFooter.Navigation = Footer.Navigation;
LevFooter.NavigationLinks = Footer.NavigationLinks;

export default LevFooter;
