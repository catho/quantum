import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputErrorMessage from './InputErrorMessage';
import { colors, spacing } from '../../shared/theme';

const HelperText = styled(InputErrorMessage)`
  color: inherit;
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
