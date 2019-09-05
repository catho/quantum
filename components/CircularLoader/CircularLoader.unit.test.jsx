import React from 'react';
import renderer from 'react-test-renderer';
import CircularLoader from './CircularLoader';

describe('CircularLoader component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleCircularLoader = <CircularLoader />;
    expect(renderer.create(simpleCircularLoader).toJSON()).toMatchSnapshot();
  });
});
