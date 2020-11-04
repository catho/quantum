import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors, spacing } from './theme';

const ErrorMessage = styled.span`
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
  theme: PropTypes.objectOf({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

ErrorMessage.defaultProps = {
  theme: { colors, spacing },
};

export default ErrorMessage;
