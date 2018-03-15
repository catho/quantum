import React from 'react';
import renderer from 'react-test-renderer';
import MenuDesktop from './MenuDesktop';
import data from '../data';

describe('MenuDesktop component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<MenuDesktop
      data={data}
      handleLoginOpen={() => {}}
      handleMenuOpen={() => {}}
      menuOpened={null}
      loginOpened={false}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
