import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './TextArea';

describe('TextArea component', () => {
  it('should match snapshots', () => {
    const TEXT_AREAS = [
      <TextArea />,
      <TextArea value="foo" />,
      // <TextArea label="Text label" />,
      // <TextArea error="Error message" />,
      // <TextArea required />,
      // <TextArea disabled />,
      // <TextArea helperText="this is a helper text" />,
      // <TextArea placeholder="this input has a placeholder" />,
    ];

    TEXT_AREAS.forEach(input =>
      expect(renderer.create(input).toJSON()).toMatchSnapshot(),
    );
  });
});
