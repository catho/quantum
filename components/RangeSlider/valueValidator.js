const valueValidator = (props, propName, componentName) => {
  const { [propName]: value } = props;
  const { max, min } = props;
  const errorMessage = `${propName} prop supplied to ${componentName} is out of bounds. The ${propName} prop must be between ${min} and ${max}.`;
  const isNumber = (val) => typeof val === 'number';

  if (typeof value === 'object') {
    const { from, to } = value;

    if (!isNumber(from) || !isNumber(to)) {
      return new Error(
        `The 'from' and 'to' keys from ${propName} prop must be a Number.`,
      );
    }

    if (from < min || to > max) {
      return new Error(errorMessage);
    }

    return null;
  }

  if (!isNumber(value) && value !== undefined) {
    return new Error(`${propName} prop must be a Number.`);
  }

  if (value < min || value > max) {
    return new Error(errorMessage);
  }

  return null;
};

export default valueValidator;
