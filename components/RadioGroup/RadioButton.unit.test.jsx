import React from 'react';
import renderer from 'react-test-renderer';
import RadioButton from './RadioButton';

describe('<RadioGroup.Radio />', () => {
  describe('snapshot', () => {
    it('simple', () => {
      const component = <RadioButton value="Foo" label="Foo" />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('checked', () => {
      const component = <RadioButton value="Foo" label="Foo" checked />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('inline', () => {
      const component = <RadioButton value="Foo" label="Foo" inline />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('icon', () => {
      const component = <RadioButton value="Foo" label="Foo" icon="check" />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('disabled', () => {
      const component = <RadioButton value="Foo" label="Foo" disabled />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('error', () => {
      const component = <RadioButton value="Foo" label="Foo" error />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('disabled with an error', () => {
      const component = <RadioButton value="Foo" label="Foo" error disabled />;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });

    it('children', () => {
      const component = <RadioButton value="Foo">Foo</RadioButton>;
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
  });
});
