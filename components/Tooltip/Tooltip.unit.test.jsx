import React from 'react';
import { mount } from 'enzyme';
import Tooltip from './Tooltip';

describe('Tooltip component ', () => {
  it('Should match the snapshot', () => {
    const tooltip = mount(<Tooltip />);
    expect(tooltip.html()).toMatchSnapshot();
  });
});
