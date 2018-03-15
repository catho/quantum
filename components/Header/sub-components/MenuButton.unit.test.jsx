import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';

describe('MenuButton component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<MenuButton
      handleMenuOpen={() => {}}
      menuOpened={null}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
