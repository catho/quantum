import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '../../shared/theme';

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  ${({
    theme: {
      spacing: { xsmall, small },
    },
  }) => `
    margin: ${xsmall}px ${small}px 0;
  `}
`;

InputLabel.displayName = 'InputLabel';

InputLabel.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

InputLabel.defaultProps = {
  theme: { spacing },
};

export default InputLabel;
