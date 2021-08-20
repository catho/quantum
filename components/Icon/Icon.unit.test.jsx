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
    const withSmallSize = renderer
      .create(<Icon name="search" size="small" />)
      .toJSON();
    const withMediumSize = renderer
      .create(<Icon name="search" size="medium" />)
      .toJSON();
    const withLargeSize = renderer
      .create(<Icon name="search" size="large" />)
      .toJSON();
    const withXSmallSize = renderer
      .create(<Icon name="search" size="xsmall" />)
      .toJSON();
    const withXLargeSize = renderer
      .create(<Icon name="search" size="xlarge" />)
      .toJSON();

    expect(tree3D).toMatchSnapshot();
    expect(treeFilter).toMatchSnapshot();
    expect(treeArrow).toMatchSnapshot();
    expect(withColor).toMatchSnapshot();
    expect(withSmallSize).toMatchSnapshot();
    expect(withMediumSize).toMatchSnapshot();
    expect(withLargeSize).toMatchSnapshot();
    expect(withXSmallSize).toMatchSnapshot();
    expect(withXLargeSize).toMatchSnapshot();
  });
});
