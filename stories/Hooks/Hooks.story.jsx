import React from 'react';
import { Heading } from '@catho/quantum-storybook-ui';
import UseMediaQueryExample from './Examples/UseMediaQueryExample';

export default {
  title: 'Hooks ',
};

export const useMediaQuery = () => (
  <>
    <Heading title="UseMediaQuery" />
    <UseMediaQueryExample />
  </>
);

useMediaQuery.story = {
  name: 'useMediaQuery',
};
