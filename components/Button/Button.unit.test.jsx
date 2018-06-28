import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('Should match the snapshot', () => {
    expect(renderer.create(<Button>Text</Button>).toJSON()).toMatchSnapshot();
  });

  it('when full prop is set', () => {
    expect(
      renderer.create(<Button full>Full</Button>).toJSON(),
    ).toMatchSnapshot();
  });

  it('when center prop is set', () => {
    expect(
      renderer.create(<Button center>Center</Button>).toJSON(),
    ).toMatchSnapshot();
  });

  describe('when there is a skin set', () => {
    it('should match secondary snapshot', () => {
      const primary = <Button skin="primary">primary</Button>;
      const secondary = <Button skin="secondary">secondary</Button>;
      const action = <Button skin="action">action</Button>;
      const cancel = <Button skin="cancel">cancel</Button>;
      const modal = <Button skin="modal">modal</Button>;

      expect(renderer.create(primary).toJSON()).toMatchSnapshot();
      expect(renderer.create(secondary).toJSON()).toMatchSnapshot();
      expect(renderer.create(action).toJSON()).toMatchSnapshot();
      expect(renderer.create(cancel).toJSON()).toMatchSnapshot();
      expect(renderer.create(modal).toJSON()).toMatchSnapshot();
    });
  });

  describe('when there is a type set', () => {
    it('should match secondary snapshot', () => {
      const button = <Button type="button">button</Button>;
      const reset = <Button type="reset">reset</Button>;
      const submit = <Button type="submit">submit</Button>;

      expect(renderer.create(button).toJSON()).toMatchSnapshot();
      expect(renderer.create(reset).toJSON()).toMatchSnapshot();
      expect(renderer.create(submit).toJSON()).toMatchSnapshot();
    });
  });

  describe('with an icon', () => {
    it('should match secondary snapshot', () => {
      const search = <Button icon="search">Search</Button>;
      const sync = <Button icon="sync">Sync</Button>;
      const sms = <Button icon="sms">Message</Button>;
      const camera = <Button icon="camera">Screenshot</Button>;

      expect(renderer.create(search).toJSON()).toMatchSnapshot();
      expect(renderer.create(sync).toJSON()).toMatchSnapshot();
      expect(renderer.create(sms).toJSON()).toMatchSnapshot();
      expect(renderer.create(camera).toJSON()).toMatchSnapshot();
    });
  });
});
