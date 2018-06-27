import React from 'react';
import renderer from 'react-test-renderer';
import Slider from './Slider';

describe('Slider component ', () => {
  it('should match the snapshot', () => {
    expect(
      renderer.create(<Slider min={0} max={50} />).toJSON(),
    ).toMatchSnapshot();
  });
});
