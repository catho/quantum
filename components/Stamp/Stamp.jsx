import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const Wrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 114px;
  height: 81px;

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

const Stamp = ({ text }) => <Wrapper text={text} />;

Stamp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Stamp;
