import React from 'react';
import renderer from 'react-test-renderer';
import AutoComplete from './AutoComplete';

describe('AutoComplete component ', () => {
  it('should match the snapshot', () => {
    expect(renderer.create(<AutoComplete />).toJSON()).toMatchSnapshot();
  });
});
