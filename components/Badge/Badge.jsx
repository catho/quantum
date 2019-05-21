import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme as defaultTheme } from '../shared';

const getColors = ({ skin, theme: { colors } }) => {
  const badgeColors = {
    default: {
      background: colors.neutral[100],
      text: colors.neutral[700],
    },
    black: {
      background: colors.neutral[700],
      text: colors.neutral[100],
    },
    blue: {
      background: colors.primary[500],
      text: colors.neutral[100],
    },
    error: {
      background: colors.error[500],
      text: colors.neutral[100],
    },
    success: {
      background: colors.success[100],
      text: colors.success[900],
    },
  };

  return css`
    background-color: ${badgeColors[skin].background};
    color: ${badgeColors[skin].text};
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
  padding-left: 2px;
  padding-right: 2px;

  ${props =>
    !Number.isInteger(props.value) &&
    `
    padding-left: 4px;
    padding-right: 4px;
  `}

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
const Badge = ({ children, number, skin, theme }) => {
  const value = number > 99 ? '99+' : number;

  return (
    <BadgeWrapper value={value} originalChildren={children}>
      <StyledBadge
        skin={skin}
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
  skin: PropTypes.oneOf(['default', 'black', 'blue', 'error', 'success']),
  /** When passed a children to <Badge />, the badge will be displayed at top-right corner of the children. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Number to be displayed inside badge. When number is higher than 99 will be displayed "99+" instead of number value */
  number: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object,
  }),
};

Badge.defaultProps = {
  skin: 'default',
  children: '',
  number: 0,
  theme: defaultTheme,
};

export default Badge;
