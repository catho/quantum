import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 60px 20px;
  margin: -10px -20px 20px;
  background-color: #f8f7f7;
`;

const Heading = (storyFn, { story }) => (
  <React.Fragment>
    <Title>{ story }</Title>
    { storyFn() }
  </React.Fragment>
);

export default Heading;
