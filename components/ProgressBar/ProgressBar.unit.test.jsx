import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('Should match the snapshot of a simple progress bar', () => {
    const simpleProgressBar = <ProgressBar />;
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progress bar in progress with same progressText', () => {
    const simpleProgressBar = <ProgressBar progressPercent={30} />;
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progress bar in progress with same progressText', () => {
    const simpleProgressBar = (
      <ProgressBar progressPercent={30} progressText={30} />
    );
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar in progress with custom label', () => {
    const simpleProgressBar = (
      <ProgressBar
        progressPercent={30}
        progressText={30}
        label=" percent loaded"
      />
    );
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar in progress with custom label and progress text', () => {
    const simpleProgressBar = (
      <ProgressBar
        progressPercent={30}
        progressText={300}
        label=" files loaded from 1000"
      />
    );
    expect(renderer.create(simpleProgressBar).toJSON()).toMatchSnapshot();
  });

  it('should the label match with de props and shows correctly', () => {
    const label = ' percent processed';
    const component = mount(<ProgressBar progressPercent={30} label={label} />);
    const progressBarLabel = component.find('ProgressLabel').text();
    const labelShouldBe = `30${label}`;
    expect(progressBarLabel).toBe(labelShouldBe);
  });
});
