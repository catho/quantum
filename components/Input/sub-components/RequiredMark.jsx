import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../shared/theme';

const RequiredMark = styled.em`
  ${({
    theme: {
      colors: { error },
    },
    skin,
  }) => css`
    color: ${skin === 'default' ? error[500] : 'inherit'};
  `}
`;

RequiredMark.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
  skin: PropTypes.oneOf(['default', 'dark']),
};

RequiredMark.defaultProps = {
  theme: { colors },
};

export default RequiredMark;
