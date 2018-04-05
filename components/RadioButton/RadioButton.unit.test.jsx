import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';

describe('Button component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<RadioButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
