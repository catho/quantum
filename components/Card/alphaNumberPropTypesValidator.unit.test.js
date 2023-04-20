import alphaNumberPropTypesValidator from './alphaNumberPropTypesValidator';

const ALPHA_NUMBER_PROP_NAME = 'ALPHA_NUMBER_PROP_NAME';
const INVALID_ALPHA_NUMBER = 1.1;
const VALID_ALPHA_NUMBER = 1;
const INVALID_TYPE_ALPHA_NUMBER = '1';
const COMPONENT_NAME_EXAMPLE = 'ExampleComponent';

describe('Alpha Number PropTypes Validator helper', () => {
  it('should return an Error when an alpha value is not a number', () => {
    const validationResult = alphaNumberPropTypesValidator(
      { [ALPHA_NUMBER_PROP_NAME]: INVALID_TYPE_ALPHA_NUMBER },
      ALPHA_NUMBER_PROP_NAME,
      COMPONENT_NAME_EXAMPLE,
    );
    const expectedResultMessage = `Invalid prop \`${ALPHA_NUMBER_PROP_NAME}\` supplied to ${COMPONENT_NAME_EXAMPLE}. Required \`number\` in the range [0, 1].`;

    expect(validationResult).toBeInstanceOf(Error);
    expect(validationResult.message).toBe(expectedResultMessage);
  });

  it('should return an Error when an alpha value does not match a number in the range [0, 1]', () => {
    const validationResult = alphaNumberPropTypesValidator(
      { [ALPHA_NUMBER_PROP_NAME]: INVALID_ALPHA_NUMBER },
      ALPHA_NUMBER_PROP_NAME,
      COMPONENT_NAME_EXAMPLE,
    );
    const expectedResultMessage = `Invalid prop \`${ALPHA_NUMBER_PROP_NAME}\` supplied to ${COMPONENT_NAME_EXAMPLE}. Required \`number\` in the range [0, 1].`;

    expect(validationResult).toBeInstanceOf(Error);
    expect(validationResult.message).toBe(expectedResultMessage);
  });

  it('should return null when an alpha value is a number in the range [0, 1]', () => {
    const validationResult = alphaNumberPropTypesValidator(
      { [ALPHA_NUMBER_PROP_NAME]: VALID_ALPHA_NUMBER },
      ALPHA_NUMBER_PROP_NAME,
      COMPONENT_NAME_EXAMPLE,
    );

    expect(validationResult).toBe(null);
  });
});
