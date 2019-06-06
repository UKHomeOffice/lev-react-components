import React from 'react';
import { H1, Page } from 'govuk-react';
import { default as LevTopNav } from '../lev-top-nav';
import { default as LevFooter } from '../lev-footer';

const LevPage = props => <Page footer={<LevFooter />} header={<LevTopNav companyTitle={props.companyTitle} serviceTitle={props.serviceTitle} />}>
      <H1>{props.title}</H1>
      {props.children}
</Page>;

LevPage.defaultProps = {
  companyTitle: 'HMPO',
  serviceTitle: 'Life Event Verification'
};

export default LevPage;
