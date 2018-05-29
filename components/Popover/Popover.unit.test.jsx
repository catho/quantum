import React from 'react';
import renderer from 'react-test-renderer';
import Popover from './Popover';

describe('<Popover />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Popover />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
