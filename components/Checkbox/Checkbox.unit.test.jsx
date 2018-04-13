import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './Checkbox';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Checkbox />).toJSON()).toMatchSnapshot();
  });
});
