import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Hamburger from '../../components/Hamburger';

const InvertedBackground = styled.span`
  background-color: #000;
  display: inline-block;
`;

storiesOf('Hamburger', module)
  .add('default', () => (
    <InvertedBackground>
      <Hamburger />
    </InvertedBackground>
  ))
  .add('showNotification', () => (
    <InvertedBackground>
      <Hamburger showNotification />
    </InvertedBackground>
  ))
  .add('isOpened', () => (
    <InvertedBackground>
      <Hamburger isOpened />
    </InvertedBackground>
  ))
  .add('inverted', () => <Hamburger inverted />)
  .add('inverted showNotification', () => (
    <Hamburger inverted showNotification />
  ))
  .add('inverted isOpened', () => <Hamburger inverted isOpened />);
