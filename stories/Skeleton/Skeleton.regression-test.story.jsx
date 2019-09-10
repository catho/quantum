import React from 'react';
import { storiesOf } from '@storybook/react';
import { Skeleton } from '../../components';

storiesOf('Skeleton', module)
  .add('rect as default', () => (
    <>
      <Skeleton />
      <br />
      <Skeleton width="100px" />
      <br />
      <Skeleton height="20px" width="100px" />
    </>
  ))
  .add('text', () => (
    <>
      <Skeleton.Text />
      <br />
      <Skeleton.Text width="100px" />
      <br />
      <Skeleton.Text height="20px" width="100px" />
    </>
  ))
  .add('circle', () => <Skeleton.Circle height="56px" width="56px" />)
  .add('Button', () => (
    <>
      <Skeleton.Button width="100px" />
      <Skeleton.Button width="10%" />
      <Skeleton.Button size="xsmall" />
      <Skeleton.Button size="small" />
      <Skeleton.Button size="medium" />
      <Skeleton.Button size="large" />
    </>
  ))
  .add('Tag', () => (
    <>
      <Skeleton.Tag width="100px" />
      <Skeleton.Tag width="10%" />
      <Skeleton.Tag size="small" />
      <Skeleton.Tag size="medium" />
      <Skeleton.Tag size="large" />
    </>
  ));
