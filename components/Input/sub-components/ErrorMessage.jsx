import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ErrorMessage } from '../../shared';
import { spacing } from '../../shared/theme';

const InputErrorMessage = styled(ErrorMessage)`
  ${({
    theme: {
      spacing: { xsmall, small },
    },
  }) => `
    margin: ${xsmall}px ${small}px 0;
  `}
`;

ErrorMessage.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

ErrorMessage.defaultProps = {
  theme: { spacing },
};

export default InputErrorMessage;
