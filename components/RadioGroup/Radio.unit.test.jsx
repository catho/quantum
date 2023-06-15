import { render } from '@testing-library/react';
import Radio from './Radio';

describe('<RadioGroup.Radio />', () => {
  describe('snapshot', () => {
    it('simple', () => {
      const component = <Radio value="Foo" label="Foo" />;
      expect(render(component).asFragment()).toMatchSnapshot();
    });

    it('disabled', () => {
      const component = <Radio value="Foo" label="Foo" disabled />;
      expect(render(component).asFragment()).toMatchSnapshot();
    });

    it('error', () => {
      const component = <Radio value="Foo" label="Foo" error />;
      expect(render(component).asFragment()).toMatchSnapshot();
    });

    it('children', () => {
      const component = <Radio value="Foo">Foo</Radio>;
      expect(render(component).asFragment()).toMatchSnapshot();
    });

    it('children with element', () => {
      const component = (
        <Radio value="Foo">
          <span>Foo</span>
        </Radio>
      );
      expect(render(component).asFragment()).toMatchSnapshot();
    });

    it('required', () => {
      const component = (
        <Radio value="Foo" required>
          Foo
        </Radio>
      );
      expect(render(component).asFragment()).toMatchSnapshot();
    });
  });
});
