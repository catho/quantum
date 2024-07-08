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

const LinkBase = (
  {
    children,
    skin = 'default',
    underline = true,
    theme = {
      colors,
    },
    ...rest
  },
  ref,
) => (
  <StyledLink
    ref={ref}
    skin={skin}
    underline={underline}
    theme={theme}
    {...rest}
  >
    {children}
  </StyledLink>
);

const Link = forwardRef(LinkBase);

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

export default Link;
