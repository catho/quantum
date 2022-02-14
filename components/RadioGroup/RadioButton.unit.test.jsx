import React from 'react';
import { render } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('<RadioGroup.Radio />', () => {
  describe('snapshot', () => {
    it('simple', () => {
      const { container } = render(<RadioButton value="Foo" label="Foo" />);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('checked', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" checked />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('inline', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" inline />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('icon', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" icon="check" />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('disabled', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" disabled />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('error', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" error />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('disabled with an error', () => {
      const { container } = render(
        <RadioButton value="Foo" label="Foo" error disabled />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it('children', () => {
      const { container } = render(<RadioButton value="Foo">Foo</RadioButton>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
