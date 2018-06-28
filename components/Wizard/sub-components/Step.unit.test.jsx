import React from 'react';
import renderer from 'react-test-renderer';
import Step from './Step';

describe('Step Component', () => {
  it('Should match the snapshot', () => {
    const tree = renderer.create(<Step title="Step 1" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot with status done', () => {
    const tree = renderer
      .create(<Step title="Step 1" status="done" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot with status active', () => {
    const tree = renderer
      .create(<Step title="Step 1" status="active" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot with icon', () => {
    const tree = renderer
      .create(<Step title="Step 1" icon="person" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
