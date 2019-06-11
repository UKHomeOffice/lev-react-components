import React from 'react';
import { Footer } from 'govuk-react';
import crest from './govuk-crest.svg';
import WideWidthContainer from '../wide-width-container';

const LevFooter = () => <Footer container={WideWidthContainer} copyright={{
  text: 'Crown copyright',
  link:
  'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
  image: {
    source: crest,
    height: 102,
    width: 125
  },
}}>
</Footer>;

export default LevFooter;
