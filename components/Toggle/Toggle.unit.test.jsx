import React from 'react';
import renderer from 'react-test-renderer';
import Toggle from './Toggle';
import 'jest-styled-components';

describe('<Toggle /> ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<Toggle id="test" />).toJSON()).toMatchSnapshot();
  });
});
