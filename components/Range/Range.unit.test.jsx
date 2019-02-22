import React from 'react';
import renderer from 'react-test-renderer';
import Range from './Range';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Range />).toJSON()).toMatchSnapshot();
  });
});
