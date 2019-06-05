import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';
import { colors, spacing } from '../../shared/theme';

const HelperText = styled(ErrorMessage)`
  ${({
    theme: {
      colors: {
        neutral: { 700: neutral700 },
      },
    },
  }) => `color: ${neutral700};`}
`;

HelperText.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

HelperText.defaultProps = {
  theme: { colors, spacing },
};

export default HelperText;
