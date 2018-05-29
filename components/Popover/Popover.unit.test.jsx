import React from 'react';
import { mount } from 'enzyme';
import Popover from './Popover';

describe('<Popover />', () => {
  it('Should match the snapshot', () => {
    const popover = mount(<Popover place="top" />);
    expect(popover.html()).toMatchSnapshot();
  });
});
