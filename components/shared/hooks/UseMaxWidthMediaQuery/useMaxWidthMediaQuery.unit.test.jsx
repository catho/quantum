import React from 'react';
import { mount } from 'enzyme';

import ExampleMediaQuery from './Example';

const matchMediaMook = (match = false) =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: match,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe('useMaxWidthMediaQuery', () => {
  it('should be bigger than 768px', () => {
    matchMediaMook();
    const component = mount(<ExampleMediaQuery />);
    expect(component.find('h1').text()).toBe('More than 768');
  });

  it('should be smaller than 768px', () => {
    matchMediaMook(true);
    const component = mount(<ExampleMediaQuery />);
    expect(component.find('h1').text()).toBe('Less than 768');
  });
});
