import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 60px 20px;
  margin: 0;
  background-color: #ececec;
`;

const Heading = ({ title }) => <Title>{ title }</Title>;

export default Heading;
