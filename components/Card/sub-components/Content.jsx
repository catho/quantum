import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../../shared/theme';

const Content = styled.div.attrs(({ theme, ...rest }) => ({
  theme: {
    spacing,
    baseFontSize: defaultBaseFontSize,
    ...theme,
  },
  ...rest,
}))`
  margin: 0;

  ${({
    theme: {
      baseFontSize,
      spacing: { small, medium },
    },
  }) => `
    padding: ${small}px ${medium}px;
    font-size: ${baseFontSize * 0.875}px;
  `}
`;

Content.propTypes = {
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
  }),
};

Content.displayName = 'Card.Content';

export default Content;
