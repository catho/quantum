import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../components/Button';

storiesOf('Buttons', module)
  .add('default', () => <Button>Catho</Button>)
  .add('disabled', () => <Button disabled>Catho</Button>)
  .add('stroked', () => <Button stroked>Catho</Button>)
  .add('full', () => <Button full>Catho</Button>)
  .add('icon info', () => <Button icon="info">Catho</Button>)
  .add('size xsmall', () => <Button size="xsmall">Catho</Button>)
  .add('size small', () => <Button size="small">Catho</Button>)
  .add('size large', () => <Button size="large">Catho</Button>)
  .add('size xlarge', () => <Button size="xlarge">Catho</Button>)
  .add('skin neutral', () => <Button skin="neutral">Catho</Button>)
  .add('skin secondary', () => <Button skin="secondary">Catho</Button>)
  .add('skin success', () => <Button skin="success">Catho</Button>)
  .add('skin warning', () => <Button skin="warning">Catho</Button>)
  .add('skin error', () => <Button skin="error">Catho</Button>);
