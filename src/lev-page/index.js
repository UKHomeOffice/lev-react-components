import React from 'react';
import { default as Header } from '@govuk-react/header';
import { default as Page } from '@govuk-react/page';
import { default as LevFooter } from '../lev-footer';

const LevPage = props => <Page footer={<LevFooter />}>
      <Header>{props.title}</Header>
      {props.children}
</Page>;

export default LevPage;
