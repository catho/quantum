import React from 'react';
import renderer from 'react-test-renderer';
import Title from './Title';

describe('<Title />', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Title />).toJSON()).toMatchSnapshot();
  });
});
