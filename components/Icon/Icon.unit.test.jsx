import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

describe('<Icon />', () => {
  it('Should match the snapshot', () => {
    const tree3D = renderer.create(<Icon name="3d-rotation" />).toJSON();
    const treeFilter = renderer.create(<Icon name="filter4" />).toJSON();
    const treeArrow = renderer.create(<Icon name="arrow-forward" />).toJSON();

    expect(tree3D).toMatchSnapshot();
    expect(treeFilter).toMatchSnapshot();
    expect(treeArrow).toMatchSnapshot();
  });
});
