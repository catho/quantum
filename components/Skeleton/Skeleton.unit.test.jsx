import React from 'react';
import renderer from 'react-test-renderer';
import Skeleton from './Skeleton';

describe('Skeleton component', () => {
  it('Should match the snapshot of a simple skeleton', () => {
    const simpleSkeleton = <Skeleton />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });

  it('Should match the snapshot of a text skeleton', () => {
    const simpleSkeleton = <Skeleton.Text />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });

  it('Should match the snapshot of a circular skeleton', () => {
    const simpleSkeleton = <Skeleton.Circle height="56px" width="56px" />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });

  it('Should match the snapshot of a Button component skeleton', () => {
    const simpleSkeleton = <Skeleton.Button width="100px" />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });

  it('Should match the snapshot of a Tag component loader', () => {
    const simpleSkeleton = <Skeleton.Tag width="100px" />;
    expect(renderer.create(simpleSkeleton).toJSON()).toMatchSnapshot();
  });
});
