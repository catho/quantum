import React from 'react';
import renderer from 'react-test-renderer';
import Steps from './Steps';

describe('<Steps />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Steps />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
