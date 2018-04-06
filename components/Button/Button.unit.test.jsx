import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Button>Text</Button>).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot when full prop is set', () => {
    expect(renderer.create(<Button full>Full</Button>).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot when center prop is set', () => {
    expect(renderer.create(<Button center>Center</Button>).toJSON()).toMatchSnapshot();
  });

  describe('when there is a skin set', () => {
    it('should match secondary snapshot', () => {
      const secondary = <Button secondary>Secondary</Button>;
      expect(renderer.create(secondary).toJSON()).toMatchSnapshot();
    });

    it('should match light snapshot', () => {
      const light = <Button light>Light</Button>;
      expect(renderer.create(light).toJSON()).toMatchSnapshot();
    });

    it('should match link snapshot', () => {
      const link = <Button link>Link</Button>;
      expect(renderer.create(link).toJSON()).toMatchSnapshot();
    });

    it('should match disabled snapshot', () => {
      const disabled = <Button disabled>Disabled</Button>;
      expect(renderer.create(disabled).toJSON()).toMatchSnapshot();
    });
  });
});
