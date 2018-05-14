import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader component should match the snapshot', () => {
  it('Default', () => {
    expect(shallow(<Loader />)).toMatchSnapshot();
  });
  it('Image', () => {
    expect(shallow(<Loader.Image />)).toMatchSnapshot();
  });
  it('Text', () => {
    expect(shallow(<Loader.Text />)).toMatchSnapshot();
  });
  it('List', () => {
    expect(shallow(<Loader.List />)).toMatchSnapshot();
  });
  it('IconList', () => {
    expect(shallow(<Loader.IconList />)).toMatchSnapshot();
  });
});
