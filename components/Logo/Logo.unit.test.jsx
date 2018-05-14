import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo component ', () => {
  it('Should match snapshot with default logo', () => {
    expect(shallow(<Logo alt="Example" />)).toMatchSnapshot();
  });
});
