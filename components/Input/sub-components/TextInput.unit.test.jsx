import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('Input component', () => {
  it('should match snapshots', () => {
    const INPUTS = [
      <TextInput />,
      <TextInput error="Error message" />,
      <TextInput disabled />,
      <TextInput hasIcon />,
      <TextInput placeholder="Placeholder text" />,
      <TextInput value="Value text" />,
      <TextInput defaultValue="Value text" />,
      <TextInput placeholder="Placeholder text" value="Value text" />,
      <TextInput error="Error message" disabled />,
    ];

    INPUTS.forEach(input =>
      expect(renderer.create(input).toJSON()).toMatchSnapshot(),
    );
  });
});
