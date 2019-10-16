import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  components,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

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
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  height: 24px;
  line-height: 24px;
  min-width: 32px;
  text-align: center;
  align-items: center;
  justify-content: center;

  ${({
    value,
    theme: {
      spacing: { xxxsmall, xxsmall },
      baseFontSize,
    },
    number,
  }) => {
    const padding =
      !Number.isInteger(value) || number >= 10 ? xxsmall : xxxsmall;

    return `
      font-size: ${baseFontSize * 0.75}px;
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
    baseFontSize: PropTypes.number,
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
    baseFontSize: defaultBaseFontSize,
    spacing,
    components: {
      badge: components.badge,
    },
  },
};

export default Badge;
