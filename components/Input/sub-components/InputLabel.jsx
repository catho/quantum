import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, spacing } from '../../shared/theme';

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => css`
    margin: ${xsmall}px 0 0;

    color: inherit;
  `}
`;

InputLabel.displayName = 'InputLabel';

InputLabel.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
};

InputLabel.defaultProps = {
  theme: { spacing, colors },
};

export default InputLabel;
