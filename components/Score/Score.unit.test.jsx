// Generated with scripts/create-component.js
import { render, screen } from '@testing-library/react';

import Score from './Score';

describe('<Score />', () => {
  it('should match the snapshots', () => {
    expect(render(<Score percentage={0} />).asFragment()).toMatchSnapshot();

    expect(render(<Score percentage={25} />).asFragment()).toMatchSnapshot();

    expect(render(<Score percentage={50} />).asFragment()).toMatchSnapshot();

    expect(render(<Score percentage={75} />).asFragment()).toMatchSnapshot();

    expect(render(<Score percentage={100} />).asFragment()).toMatchSnapshot();

    expect(
      render(<Score percentage={100} skin="secondary" />).asFragment(),
    ).toMatchSnapshot();
  });

  it('should round percentage when value is float', () => {
    render(<Score percentage={50.5} />);

    expect(screen.getByText(/51% compatível/)).toBeInTheDocument();
  });

  it('should display percentage 0 when prop "percentage" is less than 100', () => {
    render(<Score percentage={-1} />);

    expect(screen.getByText(/0% compatível/)).toBeInTheDocument();
  });

  it('should display percentage 0 when prop "percentage" is greater than 100', () => {
    render(<Score percentage={110} />);

    expect(screen.getByText(/0% compatível/)).toBeInTheDocument();
  });

  it('should round percentage when value is float', () => {
    render(<Score percentage={50.5} />);

    expect(screen.getByText(/51% compatível/)).toBeInTheDocument();
  });

  it('should display actual percentage value when not an integer and when value of prop "round" is false', () => {
    render(<Score percentage={50.5} round={false} />);

    expect(screen.getByText(/50,5% compatível/)).toBeInTheDocument();
  });

  it('should display text when value of prop "text" is passed', () => {
    render(<Score percentage={50.5} round={false} text="de compatibilidade" />);

    expect(screen.getByText(/50,5% de compatibilidade/)).toBeInTheDocument();
  });

  it('must show maximum two digits after comma when percentage is float and has more than 2 digits after dot and prop "round" is false', () => {
    render(<Score percentage={50.555} round={false} />);

    expect(screen.getByText(/50,55% compatível/)).toBeInTheDocument();
  });
});
