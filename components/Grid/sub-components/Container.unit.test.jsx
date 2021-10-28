import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Container from './Container';

describe('<Container />', () => {
  describe('with hide prop', () => {
    it("should hide it's children according to screen size", () => {
      expect(
        renderer.create(<Container hide="xsmall">Content</Container>).toJSON(),
      ).toMatchSnapshot();
      expect(
        renderer.create(<Container hide="small">Content</Container>).toJSON(),
      ).toMatchSnapshot();
      expect(
        renderer.create(<Container hide="medium">Content</Container>).toJSON(),
      ).toMatchSnapshot();
      expect(
        renderer.create(<Container hide="large">Content</Container>).toJSON(),
      ).toMatchSnapshot();
      expect(
        renderer
          .create(<Container hide={['medium', 'large']}>Content</Container>)
          .toJSON(),
      ).toMatchSnapshot();
    });
  });

  describe('with fluid prop', () => {
    it('should have a fluid width', () => {
      expect(
        renderer.create(<Container fluid>Content</Container>).toJSON(),
      ).toMatchSnapshot();
    });
  });

  describe('with withBreakpoints prop', () => {
    it('should have a fixed width', () => {
      expect(
        renderer
          .create(<Container withBreakpoints>Content</Container>)
          .toJSON(),
      ).toMatchSnapshot();
    });
  });

  describe('with "no-gutters" prop', () => {
    it('should not have gutters', () => {
      expect(
        renderer.create(<Container no-gutters>Content</Container>).toJSON(),
      ).toMatchSnapshot();
    });
  });
});
