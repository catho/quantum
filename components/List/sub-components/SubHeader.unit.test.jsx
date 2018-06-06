import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from './SubHeader';

describe('<SubHeader />', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<SubHeader>SubHeader</SubHeader>)).toMatchSnapshot();
  });
});
