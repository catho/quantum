import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './Notification';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Notification />).toJSON()).toMatchSnapshot();
  });
});
