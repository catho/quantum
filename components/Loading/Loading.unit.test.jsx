import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Loading component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Loading />).toJSON()).toMatchSnapshot();
  });

  it('should match the snapshot when it\'s not visible', () => {
    expect(renderer.create(<Loading visible={false} />).toJSON()).toMatchSnapshot();
  });
});
