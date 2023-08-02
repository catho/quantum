// Generated with scripts/create-component.js
import { render, screen } from '@testing-library/react';

import RingGraph from './RingGraph';

describe('<RingGraph />', () => {
  it('should match the snapshots', () => {
    expect(render(<RingGraph percentage={0} />).asFragment()).toMatchSnapshot();

    expect(
      render(<RingGraph percentage={25} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<RingGraph percentage={50} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<RingGraph percentage={75} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<RingGraph percentage={100} />).asFragment(),
    ).toMatchSnapshot();

    expect(
      render(<RingGraph percentage={100} skin="secondary" />).asFragment(),
    ).toMatchSnapshot();
  });

  it('should round percentage when value is float', () => {
    render(<RingGraph percentage={50.5} />);

    expect(screen.getByText(/51% compatível/)).toBeInTheDocument();
  });

  it('should display percentage 0 when prop "percentage" is less than 100', () => {
    render(<RingGraph percentage={-1} />);

    expect(screen.getByText(/0% compatível/)).toBeInTheDocument();
  });

  it('should display percentage 0 when prop "percentage" is greater than 100', () => {
    render(<RingGraph percentage={110} />);

    expect(screen.getByText(/0% compatível/)).toBeInTheDocument();
  });

  it('should round percentage when value is float', () => {
    render(<RingGraph percentage={50.5} />);

    expect(screen.getByText(/51% compatível/)).toBeInTheDocument();
  });

  it('should display actual percentage value when not an integer and when value of prop "round" is false', () => {
    render(<RingGraph percentage={50.5} round={false} />);

    expect(screen.getByText(/50,5% compatível/)).toBeInTheDocument();
  });

  it('must show maximum two digits after comma when percentage is float and has more than 2 digits after dot and prop "round" is false', () => {
    render(<RingGraph percentage={50.555} round={false} />);

    expect(screen.getByText(/50,55% compatível/)).toBeInTheDocument();
  });
});
