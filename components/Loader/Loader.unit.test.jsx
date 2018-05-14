import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './Loader';

describe('Loader component should match the snapshot', () => {
  it('Default', () => {
    expect(renderer.create(<Loader />).toJSON()).toMatchSnapshot();
  });
  it('Image', () => {
    expect(renderer.create(<Loader.Image />).toJSON()).toMatchSnapshot();
  });
  it('Text', () => {
    expect(renderer.create(<Loader.Text />).toJSON()).toMatchSnapshot();
  });
  it('List', () => {
    expect(renderer.create(<Loader.List />).toJSON()).toMatchSnapshot();
  });
  it('IconList', () => {
    expect(renderer.create(<Loader.IconList />).toJSON()).toMatchSnapshot();
  });
});
