import React from 'react';
import renderer from 'react-test-renderer';
import Toggle from './Toggle';

describe('Toggle component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Toggle id="toggle" label="Simple toggle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
