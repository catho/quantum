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

    ${skin === 'white' && 'mix-blend-mode: screen;'}
  `;
};

const Wrapper = styled.div`
  display: inline-block;

  ${props =>
    props.child
      ? `position: relative;`
      : `margin-left: 8px; margin-right: 8px;`}
`;

const Tag = styled.span`
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
    props.value > 99 &&
    `
    padding-left: 4px;
    padding-right: 4px;
  `}

  ${props =>
    props.child &&
    `
    position: absolute;
    right: -10px;
    top: -10px;
  `}

  ${getColors}
`;

const Badge = ({ children, number, skin }) => {
  const value = number > 99 ? '99+' : number;

  return (
    <Wrapper value={value} child={children}>
      <Tag skin={skin} value={number} child={children}>
        {value}
      </Tag>
      {children}
    </Wrapper>
  );
};

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
