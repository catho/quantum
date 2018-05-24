import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Card />).toJSON()).toMatchSnapshot();
  });
});
