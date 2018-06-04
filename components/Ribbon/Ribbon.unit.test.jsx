import React from 'react';
import renderer from 'react-test-renderer';
import Ribbon from './Ribbon';

describe('<Ribbon />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Ribbon text="example" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
