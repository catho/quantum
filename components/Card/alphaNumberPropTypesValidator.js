export const isValidAlphaNumber = (value) => {
  if (typeof value === 'number' && value >= 0 && value <= 1) {
    return true;
  }

  return false;
};

export default (props, propName, componentName) => {
  const alphaNumber = props[propName];

  if (alphaNumber && !isValidAlphaNumber(alphaNumber)) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to ${componentName}. Required \`number\` in the range [0, 1].`,
    );
  }

  return null;
};
