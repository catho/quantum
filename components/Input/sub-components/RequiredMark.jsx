import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../../shared/theme';

const RequiredMark = styled.em.attrs(({ skin, theme, ...rest }) => ({
  theme: { colors, ...theme },
  skin: skin || 'default',
  ...rest,
}))`
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

export default RequiredMark;
