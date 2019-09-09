import React from 'react';
import renderer from 'react-test-renderer';
import Skeleton from './Skeleton';

describe('Skeleton component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleSkeleton = <Skeleton />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });
});
