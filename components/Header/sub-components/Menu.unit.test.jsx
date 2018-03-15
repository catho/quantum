import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './Menu';
import data from '../data';

describe('Menu component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Menu
      data={data}
      handleMenuOpen={() => {}}
      handleLoginOpen={() => {}}
      menuOpened={null}
      loginOpened={false}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
