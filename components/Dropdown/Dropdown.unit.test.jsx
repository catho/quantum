import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

describe('Input component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Dropdown />).toJSON()).toMatchSnapshot();
  });
});
