import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from './theme';

const ErrorMessage = styled.div`
  color: ${({
    theme: {
      colors: { error },
    },
  }) => error[900]};
  font-size: 14px;
  cursor: text;
  font-style: italic;
  font-weight: 600;
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
