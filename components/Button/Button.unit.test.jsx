import { render, screen } from '@testing-library/react';
import Button from './Button';
import { colors } from '../shared/theme';

describe('Button component', () => {
  it('Should match the snapshot', () => {
    const { container } = render(<Button>Text</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('when full prop is set', () => {
    const { container } = render(<Button full>Text</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('when center prop is set', () => {
    const { container } = render(<Button center>Text</Button>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a button only icon state ', () => {
    const { container: defaultSize } = render(<Button icon="info" />);
    const { container: xSmallSize } = render(
      <Button icon="info" size="xsmall" />,
    );
    const { container: smallSize } = render(
      <Button icon="info" size="small" />,
    );
    const { container: largeSize } = render(
      <Button icon="info" size="large" />,
    );
    const { container: xLargeSizeIcon } = render(
      <Button icon="info" size="xlarge" />,
    );

    expect(defaultSize.firstChild).toMatchSnapshot();
    expect(xSmallSize.firstChild).toMatchSnapshot();
    expect(smallSize.firstChild).toMatchSnapshot();
    expect(largeSize.firstChild).toMatchSnapshot();
    expect(xLargeSizeIcon.firstChild).toMatchSnapshot();
  });

  describe('when there is a skin set', () => {
    it('should match secondary snapshot', () => {
      const { container: neutral } = render(
        <Button skin="neutral">neutral</Button>,
      );
      const { container: primary } = render(
        <Button skin="primary">primary</Button>,
      );
      const { container: success } = render(
        <Button skin="success">success</Button>,
      );
      const { container: warning } = render(
        <Button skin="warning">warning</Button>,
      );
      const { container: error } = render(<Button skin="error">error</Button>);

      expect(neutral.firstChild).toMatchSnapshot();
      expect(primary.firstChild).toMatchSnapshot();
      expect(success.firstChild).toMatchSnapshot();
      expect(warning.firstChild).toMatchSnapshot();
      expect(error.firstChild).toMatchSnapshot();
    });
  });

  describe('when there is a type set', () => {
    it('should match secondary snapshot', () => {
      const { container: button } = render(
        <Button type="button">button</Button>,
      );
      const { container: reset } = render(<Button type="reset">reset</Button>);
      const { container: submit } = render(
        <Button type="submit">submit</Button>,
      );

      expect(button.firstChild).toMatchSnapshot();
      expect(reset.firstChild).toMatchSnapshot();
      expect(submit.firstChild).toMatchSnapshot();
    });
  });

  describe('with an icon', () => {
    it('should match secondary snapshot', () => {
      const { container: search } = render(
        <Button icon="search">Search</Button>,
      );
      const { container: payment } = render(
        <Button icon="payment">Payment</Button>,
      );
      const { container: lock } = render(<Button icon="lock">Lock</Button>);
      const { container: star } = render(<Button icon="star">Star</Button>);

      expect(search.firstChild).toMatchSnapshot();
      expect(payment.firstChild).toMatchSnapshot();
      expect(lock.firstChild).toMatchSnapshot();
      expect(star.firstChild).toMatchSnapshot();
    });
  });

  it('should have disabled and stroked styles', () => {
    render(
      <Button stroked disabled>
        Text
      </Button>,
    );

    const button = screen.getByRole('button', { name: /Text/i });

    expect(button).toHaveStyle({
      'background-color': `${colors.neutral[300]}`,
      color: `${colors.neutral[700]}`,
      border: `2px solid ${colors.neutral[500]}`,
    });
  });

  it('should have disabled styles', () => {
    render(<Button disabled>Text</Button>);

    const button = screen.getByRole('button', { name: /Text/i });

    expect(button).toHaveStyle({
      'background-color': `${colors.neutral[300]}`,
      color: `${colors.neutral[700]}`,
      border: `2px solid ${colors.neutral[300]}`,
    });
  });
});
