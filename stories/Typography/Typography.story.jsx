import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from '@catho-private/quantum-storybook-ui';

// import Typography from './Typography';

import { Title } from '../../components/GlobalStyle';

storiesOf('1. Foundation', module).add('Typography', () => (
  <Heading title="Typography">
    <Title>Title</Title>
    <Title as="h1">Title</Title>
    <Title as="h2">Title</Title>
    <Title as="h3">Title</Title>
    <Title as="h4">Title</Title>
    <Title as="h5">Title</Title>
    <Title as="h6">Title</Title>

    {/* <Typography /> */}
  </Heading>
));
