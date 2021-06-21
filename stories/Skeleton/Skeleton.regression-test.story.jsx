import React from 'react';
import { Skeleton } from '../../components';

export default {
  title: 'Skeleton',
};

export const RectAsDefault = () => (
  <>
    <Skeleton />
    <br />
    <Skeleton width="100px" />
    <br />
    <Skeleton height="20px" width="100px" />
  </>
);

RectAsDefault.story = {
  name: 'rect as default',
};

export const _Text = () => (
  <>
    <Skeleton.Text />
    <br />
    <Skeleton.Text width="100px" />
    <br />
    <Skeleton.Text height="20px" width="100px" />
  </>
);

_Text.story = {
  name: 'text',
};

export const _Circle = () => <Skeleton.Circle height="56px" width="56px" />;

_Circle.story = {
  name: 'circle',
};

export const _Button = () => (
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

export const _Tag = () => (
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
