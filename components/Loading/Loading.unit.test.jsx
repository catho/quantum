import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Loading component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Loading />).toJSON()).toMatchSnapshot();
  });
});
