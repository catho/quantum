import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, spacing } from './theme';

const ErrorMessage = styled.span.attrs(({ theme, ...rest }) => ({
  theme: { colors, spacing, ...theme },
  ...rest,
}))`
  ${({
    theme: {
      colors: {
        error: { 900: errorColor },
      },
      spacing: { xsmall },
    },
  }) => `
    color: ${errorColor};
    margin-top: ${xsmall}px;
  `};

  cursor: text;
  display: block;
  line-height: normal;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
`;

ErrorMessage.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default ErrorMessage;
