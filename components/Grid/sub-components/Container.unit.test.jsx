import { render } from '@testing-library/react';
import Container from './Container';

describe.skip('<Container />', () => {
  describe.skip('with hide prop', () => {
    it("should hide it's children according to screen size", () => {
      const { container: xsmall } = render(
        <Container hide="xsmall">Content</Container>,
      );
      const { container: small } = render(
        <Container hide="small">Content</Container>,
      );
      const { container: medium } = render(
        <Container hide="medium">Content</Container>,
      );
      const { container: large } = render(
        <Container hide="large">Content</Container>,
      );
      const { container: array } = render(
        <Container hide={['medium', 'large']}>Content</Container>,
      );

      expect(xsmall.firstChild).toMatchSnapshot();
      expect(small.firstChild).toMatchSnapshot();
      expect(medium.firstChild).toMatchSnapshot();
      expect(large.firstChild).toMatchSnapshot();
      expect(array.firstChild).toMatchSnapshot();
    });
  });

  describe.skip('with fluid prop', () => {
    it('should have a fluid width', () => {
      const { container } = render(<Container fluid>Content</Container>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe.skip('with withBreakpoints prop', () => {
    it('should have a fixed width', () => {
      const { container } = render(
        <Container withBreakpoints>Content</Container>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe.skip('with "no-gutters" prop', () => {
    it('should not have gutters', () => {
      const { container } = render(<Container no-gutters>Content</Container>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
