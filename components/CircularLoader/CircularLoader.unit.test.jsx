import React from 'react';
import renderer from 'react-test-renderer';
import CircularLoader from './CircularLoader';

describe('CircularLoader component', () => {
  it('Should match the snapshot of a simple circular loader', () => {
    const simpleCircularLoader = <CircularLoader />;
    expect(renderer.create(simpleCircularLoader).toJSON()).toMatchSnapshot();
  });

  describe('When you set a different skin', () => {
    it('Should match a skin snapshot', () => {
      const neutral = <CircularLoader skin="neutral" />;
      const primary = <CircularLoader skin="primary" />;
      const success = <CircularLoader skin="success" />;
      const warning = <CircularLoader skin="warning" />;
      const error = <CircularLoader skin="error" />;
      expect(renderer.create(neutral).toJSON()).toMatchSnapshot();
      expect(renderer.create(primary).toJSON()).toMatchSnapshot();
      expect(renderer.create(success).toJSON()).toMatchSnapshot();
      expect(renderer.create(warning).toJSON()).toMatchSnapshot();
      expect(renderer.create(error).toJSON()).toMatchSnapshot();
    });
  });
});
