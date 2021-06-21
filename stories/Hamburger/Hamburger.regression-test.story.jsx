import React from 'react';
import styled from 'styled-components';

import Hamburger from '../../components/Hamburger';

const InvertedBackground = styled.span`
  background-color: #000;
  display: inline-block;
`;

export default {
  title: 'Hamburger',
};

export const Default = () => (
  <InvertedBackground>
    <Hamburger />
  </InvertedBackground>
);

Default.story = {
  name: 'default',
};

export const ShowNotification = () => (
  <InvertedBackground>
    <Hamburger showNotification />
  </InvertedBackground>
);

ShowNotification.story = {
  name: 'showNotification',
};

export const IsOpened = () => (
  <InvertedBackground>
    <Hamburger isOpened />
  </InvertedBackground>
);

IsOpened.story = {
  name: 'isOpened',
};

export const Inverted = () => <Hamburger inverted />;

Inverted.story = {
  name: 'inverted',
};

export const InvertedShowNotification = () => (
  <Hamburger inverted showNotification />
);

InvertedShowNotification.story = {
  name: 'inverted showNotification',
};

export const InvertedIsOpened = () => <Hamburger inverted isOpened />;

InvertedIsOpened.story = {
  name: 'inverted isOpened',
};
