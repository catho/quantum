import React from 'react';
import renderer from 'react-test-renderer';
import ComponentHighlight from './ComponentHighlight';

describe('<ComponentHighlight />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<ComponentHighlight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
