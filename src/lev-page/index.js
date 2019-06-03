import React from 'react';
import { default as Page } from '@govuk-react/page';
import { default as LevFooter } from '../lev-footer';

const LevPage = props => <Page footer={<LevFooter />}>
      <h1>{props.title}</h1>
      {props.children}
</Page>;

export default LevPage;
