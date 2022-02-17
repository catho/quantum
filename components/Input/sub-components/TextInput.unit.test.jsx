import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('Input component', () => {
  it('should match snapshots', () => {
    const INPUTS = [
      <TextInput />,
      <TextInput skin="dark" />,
      <TextInput error="Error message" />,
      <TextInput skin="dark" error="Error message" />,
      <TextInput disabled />,
      <TextInput skin="dark" disabled />,
      <TextInput hasIcon />,
      <TextInput skin="dark" hasIcon />,
      <TextInput placeholder="Placeholder text" />,
      <TextInput skin="dark" placeholder="Placeholder text" />,
      <TextInput value="Value text" readOnly />,
      <TextInput skin="dark" value="Value text" readOnly />,
      <TextInput defaultValue="Value text" />,
      <TextInput skin="dark" defaultValue="Value text" />,
      <TextInput placeholder="Placeholder text" value="Value text" readOnly />,
      <TextInput
        skin="dark"
        placeholder="Placeholder text"
        value="Value text"
        readOnly
      />,
      <TextInput error="Error message" disabled />,
      <TextInput skin="dark" error="Error message" disabled />,
    ];

    INPUTS.forEach(input => {
      const { container } = render(input);
      expect(container).toMatchSnapshot();
    });
  });
});
