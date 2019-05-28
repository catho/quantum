import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';

describe('Alert component', () => {
  it('Should match the snapshot of a simple alert', () => {
    const simpleAlert = <Alert onClose={() => {}}>Sample alert</Alert>;
    expect(renderer.create(simpleAlert).toJSON()).toMatchSnapshot();
  });

  describe('When you set a alert custom icon', () => {
    it('Should match the snapshot with an icon', () => {
      const simpleAlert = (
        <Alert onClose={() => {}} icon="info">
          Sample alert
        </Alert>
      );
      expect(renderer.create(simpleAlert).toJSON()).toMatchSnapshot();
    });
  });

  describe('When you set a different skin', () => {
    it('Should match a skin snapshot', () => {
      const neutral = (
        <Alert onClose={() => {}} skin="neutral">
          blue
        </Alert>
      );
      const primary = (
        <Alert onClose={() => {}} skin="primary">
          blue
        </Alert>
      );
      const success = (
        <Alert onClose={() => {}} skin="success">
          success
        </Alert>
      );
      const warning = (
        <Alert onClose={() => {}} skin="warning">
          warning
        </Alert>
      );
      const error = (
        <Alert onClose={() => {}} skin="error">
          error
        </Alert>
      );
      expect(renderer.create(neutral).toJSON()).toMatchSnapshot();
      expect(renderer.create(primary).toJSON()).toMatchSnapshot();
      expect(renderer.create(success).toJSON()).toMatchSnapshot();
      expect(renderer.create(warning).toJSON()).toMatchSnapshot();
      expect(renderer.create(error).toJSON()).toMatchSnapshot();
    });
  });
});
