import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from './theme';

const ErrorMessage = styled.span`
  color: ${({
    theme: {
      colors: { error },
    },
  }) => error[900]};
  font-size: 14px;
  cursor: text;
  font-style: italic;
  font-weight: 600;
  display: block;
`;

ErrorMessage.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

ErrorMessage.defaultProps = {
  theme: { colors },
};

export default ErrorMessage;
