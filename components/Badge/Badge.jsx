import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { components, spacing } from '../shared/theme';

const getColors = ({
  skin,
  theme: {
    components: {
      badge: {
        skins: { [skin]: badgeColor },
      },
    },
  },
  inverted,
}) => {
  if (inverted) {
    const [text, background] = [badgeColor.background, badgeColor.text];
    return css`
      background-color: ${background};
      color: ${text};
    `;
  }
  return css`
    background-color: ${badgeColor.background};
    color: ${badgeColor.text};
  `;
};

const BadgeWrapper = styled.div`
  display: inline-block;

  ${props =>
    props.originalChildren
      ? `position: relative;`
      : `margin-left: 8px; margin-right: 8px;`}
`;

const StyledBadge = styled.span`
  border-radius: 8px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
  text-align: center;
  box-sizing: border-box;

  ${({
    value,
    theme: {
      spacing: { xxxsmall, xxsmall },
    },
    number,
  }) => {
    const padding =
      !Number.isInteger(value) || number >= 10 ? xxsmall : xxxsmall;

    return `
      padding-left: ${padding}px;
      padding-right: ${padding}px;
    `;
  }}

  ${props =>
    props.originalChildren &&
    `
    position: absolute;
    right: -10px;
    top: -10px;
  `}

  ${getColors}
`;

/** This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead */
const Badge = ({ children, number, skin, inverted, theme }) => {
  const value = number > 99 ? '99+' : number;

  return (
    <BadgeWrapper value={value} originalChildren={children}>
      <StyledBadge
        skin={skin}
        inverted={inverted}
        theme={theme}
        value={value}
        originalChildren={children}
      >
        {value}
      </StyledBadge>
      {children}
    </BadgeWrapper>
  );
};

BadgeWrapper.displayName = 'BadgeWrapper';
StyledBadge.displayName = 'StyledBadge';
Badge.displayName = 'Badge';

Badge.propTypes = {
  /** Define background and text color */
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral']),
  /** When passed a children to <Badge />, the badge will be displayed at top-right corner of the children. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Number to be displayed inside badge. When number is higher than 99 will be displayed "99+" instead of number value */
  number: PropTypes.number,
  /** Swap background and text color */
  inverted: PropTypes.bool,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    components: PropTypes.shape({
      badge: PropTypes.object,
    }),
  }),
};

Badge.defaultProps = {
  skin: 'neutral',
  inverted: false,
  children: '',
  number: 0,
  theme: {
    spacing,
    components: {
      badge: components.badge,
    },
  },
};

export default Badge;
