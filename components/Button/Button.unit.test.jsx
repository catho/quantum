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

  it('should render a button only icon state ', () => {
    expect(renderer.create(<Button icon="info" />).toJSON()).toMatchSnapshot();
    expect(
      renderer.create(<Button icon="info" size="xsmall" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Button icon="info" size="small" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Button icon="info" size="large" />).toJSON(),
    ).toMatchSnapshot();
    expect(
      renderer.create(<Button icon="info" size="xlarge" />).toJSON(),
    ).toMatchSnapshot();
  });

  describe('when there is a skin set', () => {
    it('should match secondary snapshot', () => {
      const neutral = <Button skin="neutral">neutral</Button>;
      const primary = <Button skin="primary">primary</Button>;
      const success = <Button skin="success">success</Button>;
      const warning = <Button skin="warning">warning</Button>;
      const error = <Button skin="error">error</Button>;

      expect(renderer.create(neutral).toJSON()).toMatchSnapshot();
      expect(renderer.create(primary).toJSON()).toMatchSnapshot();
      expect(renderer.create(success).toJSON()).toMatchSnapshot();
      expect(renderer.create(warning).toJSON()).toMatchSnapshot();
      expect(renderer.create(error).toJSON()).toMatchSnapshot();
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
      const payment = <Button icon="payment">Payment</Button>;
      const lock = <Button icon="lock">Lock</Button>;
      const star = <Button icon="star">Star</Button>;

      expect(renderer.create(search).toJSON()).toMatchSnapshot();
      expect(renderer.create(payment).toJSON()).toMatchSnapshot();
      expect(renderer.create(lock).toJSON()).toMatchSnapshot();
      expect(renderer.create(star).toJSON()).toMatchSnapshot();
    });
  });
});
