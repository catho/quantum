import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const getBgColor = ({ skin }) => {
  const color = Colors[skin.toUpperCase()];
  return color[500] || color;
};

const getFontColor = ({ skin }) =>
  skin === 'white' ? Colors.BLACK : Colors.WHITE;

const Wrapper = styled.div`
  background-color: ${getBgColor};
  border-radius: 2px;
  color: ${getFontColor};
  font-size: 10px;
  padding: 2px 4px;
  text-align: center;
`;

const Badge = ({ children, skin }) => (
  <Wrapper skin={skin}> {children} </Wrapper>
);

Badge.propTypes = {
  skin: PropTypes.oneOf([
    'brand1',
    'brand2',
    'primary',
    'secondary',
    'success',
    'action',
    'warning',
    'danger',
    'info',
    'p2p',
    'black',
    'white',
  ]),
  children: PropTypes.string,
};

Badge.defaultProps = {
  skin: 'primary',
  children: 'Badge',
};

export default Badge;
