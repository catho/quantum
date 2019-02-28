import valueValidator from './valueValidator';

const _validator = value =>
  valueValidator({ value, min: 10, max: 30 }, 'value', 'Slider');

describe('Value prop validator', () => {
  describe('with a single value', () => {
    it('shoud return null when it is valid', () => {
      expect(_validator(30)).toBeNull();
    });

    it('shoud return an Error when it is not a number', () => {
      expect(_validator('30')).toBeInstanceOf(Error);
    });

    it('shoud return an Error when it is greater then max prop', () => {
      expect(_validator(40)).toBeInstanceOf(Error);
    });

    it('shoud return an Error when it is less then min prop', () => {
      expect(_validator(5)).toBeInstanceOf(Error);
    });
  });

  describe('with a range value', () => {
    it('shoud return null when both is valid', () => {
      expect(
        _validator({
          from: 11,
          to: 25,
        }),
      ).toBeNull();
    });

    it('shoud return an Error when one of them are not a number', () => {
      expect(
        _validator({
          from: '11',
          to: 25,
        }),
      ).toBeInstanceOf(Error);

      expect(
        _validator({
          from: 11,
          to: '25',
        }),
      ).toBeInstanceOf(Error);
    });

    it('shoud return an Error when "to" value is greater then max prop', () => {
      expect(
        _validator({
          from: 11,
          to: 45,
        }),
      ).toBeInstanceOf(Error);
    });

    it('shoud return an Error when "from" value is less then min prop', () => {
      expect(
        _validator({
          from: 5,
          to: 25,
        }),
      ).toBeInstanceOf(Error);
    });
  });
});
