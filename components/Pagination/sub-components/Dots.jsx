import React from 'react';
import styled from 'styled-components';
import Colors from '../../Colors';

const sharedStyles = `
  background-color: ${Colors.BLACK['200']};
  border-radius: 50%;
  display: inline-block;
  height: 5px;
  width: 5px;
`;

const sharedPseudoElementStyles = `
  content: '';
  position: absolute;
  tpo: 0;
  ${sharedStyles}
`;

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 8px;
  width: 22px;
`;

const Dot = styled.span`
  position: relative;
  ${sharedStyles}

  &:after {
    left: 8px;
    ${sharedPseudoElementStyles}
  }

  &:before {
    left: 16px;
    ${sharedPseudoElementStyles}
  }
`;

const Dots = ({ ...props }) => (
  <Wrapper {...props}>
    <Dot />
  </Wrapper>
);

export default Dots;
