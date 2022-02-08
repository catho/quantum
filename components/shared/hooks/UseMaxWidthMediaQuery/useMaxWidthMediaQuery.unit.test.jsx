import React from 'react';
import { mount } from 'enzyme';
import matchMediaMock from '../../helpers';

import ExampleMediaQuery from './Example';

describe('useMaxWidthMediaQuery', () => {
  it('should be bigger than 768px', () => {
    const component = mount(<ExampleMediaQuery />);
    expect(component.find('h1').text()).toBe('More than 768');
  });

  it('should be smaller than 768px', () => {
    matchMediaMock(true);
    const component = mount(<ExampleMediaQuery />);
    expect(component.find('h1').text()).toBe('Less than 768');
  });
});
