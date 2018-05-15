import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading, HowToImport } from '../../.storybook/components/Heading';
import Atom from '../static/atom.svg';
import { Mask } from '../../components/Mask';

storiesOf('8. Mask', module)
  .add('Basic', () => (
    <Mask
      value="3584"
      pattern={Array(11).fill(9)}
    />
  ));
