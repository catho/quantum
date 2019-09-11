import React from 'react';
import renderer from 'react-test-renderer';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('Should match the snapshot of a simple progress bar', () => {
    const simpleProgressBar = <ProgressBar />;
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar with title and subtitle', () => {
    const simpleProgressBar = (
      <ProgressBar title="Title" subTitle="This is a subtitle" />
    );
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar with title and subtitle and value', () => {
    const simpleProgressBar = (
      <ProgressBar
        title="Title"
        subTitle="This is a subtitle"
        progressPercent={30}
        progressText={30}
        label=" percent to finish"
      />
    );
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
});
