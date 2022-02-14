import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('Should match the snapshot of a simple progress bar', () => {
    const { container } = render(<ProgressBar />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should match the snapshot of a progress bar in progress with same progressText', () => {
    const { container } = render(<ProgressBar progressPercent={30} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should match the snapshot of a progress bar in progress with same progressText', () => {
    const { container } = render(
      <ProgressBar progressPercent={30} progressText={30} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar in progress with custom label', () => {
    const { container } = render(
      <ProgressBar
        progressPercent={30}
        progressText={30}
        label=" percent loaded"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('Should match the snapshot of a progressbar in progress with custom label and progress text', () => {
    const { container } = render(
      <ProgressBar
        progressPercent={30}
        progressText={300}
        label=" files loaded from 1000"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should the label match with de props and shows correctly', () => {
    const label = ' percent processed';
    render(<ProgressBar progressPercent={30} label={label} />);
    const labelShouldBe = `30${label}`;
    expect(screen.getByText(labelShouldBe)).toBeInTheDocument();
  });
});
