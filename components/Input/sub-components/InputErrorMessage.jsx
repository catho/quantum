import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ErrorMessage } from '../../shared';
import { spacing, colors } from '../../shared/theme';

const InputErrorMessage = styled(ErrorMessage)`
  ${({
    theme: {
      colors: { neutral },
    },
    skin,
  }) =>
    skin === 'dark' &&
    css`
      color: ${neutral[0]};
    `}
`;

InputErrorMessage.displayName = 'InputErrorMessage';

InputErrorMessage.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
  skin: PropTypes.oneOf(['default', 'dark']).isRequired,
};

InputErrorMessage.defaultProps = {
  theme: { spacing, colors },
};

export default InputErrorMessage;
