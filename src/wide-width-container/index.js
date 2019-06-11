import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { GUTTER, GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';

const WideWidthContainer = styled('div')(
  {
    margin: `0 ${GUTTER_HALF}`,
    [MEDIA_QUERIES.TABLET]: {
      margin: `0 ${GUTTER}`,
    },
  },
  spacing.withWhiteSpace()
);

export default WideWidthContainer;
