import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../shared/theme';

const StyledLink = styled.a`
  ${({ skin, underline }) => css`
    color: ${skin === 'default'
      ? colors.primary['700']
      : colors.neutral['300']};
    text-decoration: ${underline ? 'underline' : 'none'};
    cursor: pointer;
    font-weight: 700;

    word-break: break-all;

    &:hover {
      color: ${skin === 'default'
        ? colors.secondary['700']
        : colors.neutral['0']};
    }
    &:visited {
      color: ${skin === 'default' ? '#5734BA' : colors.neutral['300']};
    }
  `}
`;

const Link = forwardRef(({ children, skin, underline, ...rest }, ref) => (
  <StyledLink ref={ref} skin={skin} underline={underline} {...rest}>
    {children}
  </StyledLink>
));

Link.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
  /** This prop can be anything from a component to pure html */
  children: PropTypes.node.isRequired,
  /** Swap background and text color */
  skin: PropTypes.oneOf(['default', 'dark']),
  /** Underline css style */
  underline: PropTypes.bool,
};

Link.defaultProps = {
  theme: {
    colors,
  },
  skin: 'default',
  underline: true,
};

export default Link;
