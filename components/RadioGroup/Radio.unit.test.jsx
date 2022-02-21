import renderer from 'react-test-renderer';
import Radio from './Radio';

describe('<RadioGroup.Radio />', () => {
  describe('snapshot', () => {
    it('simple', () => {
      const component = <Radio value="Foo" label="Foo" />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('disabled', () => {
      const component = <Radio value="Foo" label="Foo" disabled />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('error', () => {
      const component = <Radio value="Foo" label="Foo" error />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('children', () => {
      const component = <Radio value="Foo">Foo</Radio>;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('children with element', () => {
      const component = (
        <Radio value="Foo">
          <span>Foo</span>
        </Radio>
      );
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('required', () => {
      const component = (
        <Radio value="Foo" required>
          Foo
        </Radio>
      );
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
  });
});
