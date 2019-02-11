import React from 'react';
import renderer from 'react-test-renderer';
import Subtitle from './Subtitle';

describe('<Subtitle />', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Subtitle />).toJSON()).toMatchSnapshot();
  });
});
