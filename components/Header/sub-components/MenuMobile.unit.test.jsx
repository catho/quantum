import React from 'react';
import renderer from 'react-test-renderer';
import MenuMobile from './MenuMobile';
import data from '../data';

describe('MenuMobile component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<MenuMobile data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
