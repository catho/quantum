import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ErrorMessage } from '../../shared';
import { spacing, colors } from '../../shared/theme';

const InputErrorMessage = styled(ErrorMessage)``;

InputErrorMessage.displayName = 'InputErrorMessage';

InputErrorMessage.propTypes = {
  theme: PropTypes.objectOf({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
};

InputErrorMessage.defaultProps = {
  theme: { spacing, colors },
};

export default InputErrorMessage;
