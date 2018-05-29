import React from 'react';
import renderer from 'react-test-renderer';
import Step from './Step';

describe('<Step />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Step title="Step 1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
