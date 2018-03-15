import React from 'react';
import renderer from 'react-test-renderer';
import FooterBar from './FooterBar';

describe('Footer component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<FooterBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
