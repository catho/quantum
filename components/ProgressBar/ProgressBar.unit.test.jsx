import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleProgressBar = <ProgressBar />;
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
});
