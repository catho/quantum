import React from 'react';
import renderer from 'react-test-renderer';
import StepsSubComponent from './StepsSubComponent';

describe('<StepsSubComponent />', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<StepsSubComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
