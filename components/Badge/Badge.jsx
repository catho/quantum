import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Colors from '../Colors';

const getColors = ({ skin }) => {
  const badgeColors = {
    default: {
      background: Colors.BLACK[100],
      text: Colors.BLACK[700],
    },
    black: {
      background: Colors.BLACK[700],
      text: Colors.WHITE,
    },
    blue: {
      background: Colors.BLUE[500],
      text: Colors.WHITE,
    },
    white: {
      background: Colors.WHITE,
      text: '#000',
    },
    error: {
      background: Colors.ERROR[500],
      text: Colors.WHITE,
    },
    success: {
      background: Colors.SUCCESS[200],
      text: Colors.SUCCESS[900],
    },
  };

  return css`
    background-color: ${badgeColors[skin].background};
    color: ${badgeColors[skin].text};

    ${skin === 'white' && 'mix-blend-mode: lighten;'}
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
const Badge = ({ children, number, skin }) => {
  const value = number > 99 ? '99+' : number;

  return (
    <BadgeWrapper value={value} originalChildren={children}>
      <StyledBadge skin={skin} value={value} originalChildren={children}>
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
  skin: PropTypes.oneOf([
    'default',
    'black',
    'blue',
    'white',
    'error',
    'success',
  ]),
  /** When passed a children to <Badge />, the badge will be displayed at top-right corner of the children. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Number to be displayed inside badge. When number is higher than 99 will be displayed "99+" instead of number value */
  number: PropTypes.number,
};

Badge.defaultProps = {
  skin: 'default',
  children: '',
  number: 0,
};

export default Badge;
