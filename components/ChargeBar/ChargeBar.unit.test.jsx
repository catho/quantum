import { render, screen } from '@testing-library/react';

import ChargeBar from './ChargeBar';

const customLabel = 'curriculum force';
const progressPercent = 75;

describe('ChargeBar component', () => {
  it('Should match the snapshot of ChargeBar', () => {
    expect(render(<ChargeBar />).asFragment()).toMatchSnapshot();
    expect(
      render(<ChargeBar skin="secondary" />).asFragment(),
    ).toMatchSnapshot();
    expect(render(<ChargeBar skin="success" />).asFragment()).toMatchSnapshot();
    expect(render(<ChargeBar skin="neutral" />).asFragment()).toMatchSnapshot();
    expect(
      render(
        <ChargeBar label={customLabel} progressPercent={progressPercent} />,
      ).asFragment(),
    ).toMatchSnapshot();
  });

  it('should the pops match and shows correctly', () => {
    const percent = 30;
    render(<ChargeBar progressPercent={percent} label={customLabel} />);

    expect(screen.queryByText(customLabel)).toBeInTheDocument();
    expect(screen.queryByText(`${percent}%`)).toBeInTheDocument();
  });
});
