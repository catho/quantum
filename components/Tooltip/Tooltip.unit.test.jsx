import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from './Tooltip';

describe('<Tooltip />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Tooltip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
