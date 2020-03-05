import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

describe('<Icon />', () => {
  it('Should match the snapshot', () => {
    const tree3D = renderer.create(<Icon name="accessible_forward" />).toJSON();
    const treeFilter = renderer.create(<Icon name="check_circle" />).toJSON();
    const treeArrow = renderer.create(<Icon name="search" />).toJSON();
    const withColor = renderer
      .create(<Icon name="star" skin="tomato" />)
      .toJSON();

    expect(tree3D).toMatchSnapshot();
    expect(treeFilter).toMatchSnapshot();
    expect(treeArrow).toMatchSnapshot();
    expect(withColor).toMatchSnapshot();
  });
});
