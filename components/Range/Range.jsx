import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const Dot = styled.div`
  background-color: ${Colors.BLUE[500]};
  border-radius: 50%;
  box-shadow: ${Colors.SHADOW[40]};
  display: inline-block;
  height: 20px;
  width: 20px;

  ${props =>
    !props.disabled &&
    `
    :hover {
      box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
    };`}

  ${props =>
    props.disabled &&
    `
    background-color: ${Colors.BLACK[400]};
  `}
`;

const Stripe = styled.div`
  background-color: ${Colors.BLUE[200]};
  border-radius: 5px;
  display: inline-block;
  height: 8px;
  width: 100%;

  ${props =>
    props.disabled &&
    `
    background-color: ${Colors.BLACK[100]};
  `}
`;

const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
`;

const Range = ({ disabled }) => (
  <Wrapper>
    <Dot disabled={disabled} />
    <Stripe disabled={disabled} />
  </Wrapper>
);

Range.defaultProps = {
  disabled: false,
};

Range.propTypes = {
  disabled: PropTypes.bool,
};

export default Range;
