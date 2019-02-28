import valueValidator from './valueValidator';

const _validator = props => valueValidator(props, 'value', 'Slider');

describe('Value prop validator', () => {
  it('shoud return null on single valid value', () => {
    expect(
      _validator({
        min: 10,
        max: 30,
        value: 30,
      }),
    ).toBeNull();
  });

  it('shoud return null on a range valid value', () => {
    expect(
      _validator({
        min: 10,
        max: 30,
        value: {
          from: 11,
          to: 25,
        },
      }),
    ).toBeNull();
  });
});
