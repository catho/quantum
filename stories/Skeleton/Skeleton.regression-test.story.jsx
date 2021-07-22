import React from 'react';
import { Skeleton } from '../../components';

export default {
  title: 'Skeleton',
  component: Skeleton,
};

export const Default = () => (
  <>
    <Skeleton />
    <br />
    <Skeleton width="100px" />
    <br />
    <Skeleton height="20px" width="100px" />
  </>
);

export const Text = () => (
  <>
    <Skeleton.Text />
    <br />
    <Skeleton.Text width="100px" />
    <br />
    <Skeleton.Text height="20px" width="100px" />
  </>
);

export const Circle = () => <Skeleton.Circle height="56px" width="56px" />;

export const Button = () => (
  <>
    <Skeleton.Button width="100px" />
    <br />
    <Skeleton.Button width="10%" />
    <br />
    <Skeleton.Button size="xsmall" />
    <br />
    <Skeleton.Button size="small" />
    <br />
    <Skeleton.Button size="medium" />
    <br />
    <Skeleton.Button size="large" />
  </>
);

export const Tag = () => (
  <>
    <Skeleton.Tag width="100px" />
    <Skeleton.Tag width="100px" />
    <br />
    <Skeleton.Tag width="10%" />
    <br />
    <Skeleton.Tag width="200px" size="small" />
    <Skeleton.Tag width="50px" size="small" />
    <br />
    <Skeleton.Tag width="200px" size="medium" />
    <Skeleton.Tag width="50px" size="medium" />
    <br />
    <Skeleton.Tag width="200px" size="large" />
    <Skeleton.Tag width="50px" size="large" />
  </>
);
