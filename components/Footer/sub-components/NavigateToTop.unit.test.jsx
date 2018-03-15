import React from 'react';
import renderer from 'react-test-renderer';
import NavigateToTop from './NavigateToTop';

describe('NavigateToTop component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<NavigateToTop />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
