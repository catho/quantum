import React from 'react';
import renderer from 'react-test-renderer';
import PromotionBar from './PromotionBar';
import data from '../data';

describe('PromotionBar component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<PromotionBar data={data.promotion} href="#" >foo</PromotionBar>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
