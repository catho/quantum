import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';

describe('Item component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<Item />)).toMatchSnapshot();
  });
});
