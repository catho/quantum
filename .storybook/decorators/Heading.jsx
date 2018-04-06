import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  position:relative;
  padding: 60px 20px;
  top: -10px;
  left:-20px;
  width:120%;
  background-color: #f8f7f7;
`;

const Heading = (storyFn, { story }) => (
  <React.Fragment>
    <Title>{ story }</Title>
    { storyFn() }
  </React.Fragment>
);

export default Heading;
