import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputErrorMessage from './InputErrorMessage';
import { colors, spacing } from '../../shared/theme';

const HelperText = styled(InputErrorMessage)`
  ${({
    theme: {
      colors: {
        neutral: { 700: neutral700 },
      },
    },
  }) => `color: ${neutral700};`}
`;

HelperText.propTypes = {
  theme: PropTypes.objectOf({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

HelperText.defaultProps = {
  theme: { colors, spacing },
};

export default HelperText;
