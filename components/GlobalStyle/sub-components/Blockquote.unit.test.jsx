import React from 'react';
import renderer from 'react-test-renderer';
import Blockquote from './Blockquote';

describe('<Blockquote />', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Blockquote />).toJSON()).toMatchSnapshot();
  });
});
