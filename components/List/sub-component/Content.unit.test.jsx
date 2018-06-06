import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

describe('Content component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });
});
