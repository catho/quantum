import { render } from '@testing-library/react';
import Container from './Container';

describe('<Container />', () => {
  describe('with fluid prop', () => {
    it('should have a fluid width', () => {
      const { container } = render(<Container fluid>Content</Container>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with withBreakpoints prop', () => {
    it('should have a fixed width', () => {
      const { container } = render(
        <Container withBreakpoints>Content</Container>,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with "no-gutters" prop', () => {
    it('should not have gutters', () => {
      const { container } = render(<Container no-gutters>Content</Container>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
