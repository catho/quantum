import React from 'react';
import renderer from 'react-test-renderer';
import HeaderBar from './HeaderBar';
import data from '../data';

describe('HeaderBar component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<HeaderBar data={data.segments} path="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
