import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const Wrapper = styled.div`
  height: 81px;
  overflow: hidden;
  position: absolute;
  width: 114px;

  &:before {
    background-color: ${Colors.SECONDARY['500']};
    color: ${Colors.WHITE};
    content: '${({ text }) => text}';
    font-size: 8px;
    font-weight: bold;
    height: 29px;
    left: -31px;
    padding: 10px 26px 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 17px;
    transform: rotate(-35deg);
    width: 150px;
  }
`;

const Ribbon = ({ text }) => <Wrapper text={text} />;

Ribbon.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Ribbon;
