import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from './SubHeader';

describe('SubHeader component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<SubHeader />)).toMatchSnapshot();
  });
});
