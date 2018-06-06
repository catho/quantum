import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<List />)).toMatchSnapshot();
  });
});
