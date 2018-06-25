import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Alert />).toJSON()).toMatchSnapshot();
  });
});
