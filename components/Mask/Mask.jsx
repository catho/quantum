import PropTypes from 'prop-types';

const PLACEHOLDERS = {
  0: /[0]/,
  1: /[0-1]/,
  2: /[0-2]/,
  3: /[0-3]/,
  4: /[0-4]/,
  5: /[0-5]/,
  6: /[0-6]/,
  7: /[0-7]/,
  8: /[0-8]/,
  9: /[0-9]/,
  A: /[A-Z]/,
  a: /[a-z]/,
  b: /\b/,
  d: /\d/,
  D: /\D/,
  S: /\S/,
  s: /\s/,
  W: /\W/,
  w: /\w/,
  Z: /[A-ZÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
  z: /[a-zçáàãâéèêẽíìĩîóòôõúùũüû]/,
  '*': /./,
  '@': /[a-zA-Z]/,
  '#': /[a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
  '%': /[0-9a-zA-ZçáàãâéèêẽíìĩîóòôõúùũüûÇÀÁÂÃÈÉÊẼÌÍÎĨÒÓÔÕÙÚÛŨ]/,
};

const ALLOWED_CHARS = /[\s()./-]/;

const Mask = ({ value, pattern }) => {
  if (!pattern) return value;
  const patternStr = typeof pattern === 'function' ? pattern(value) : pattern;

  let parsed = '';
  let valueIndex = 0;
  let patternIndex = 0;

  while (patternIndex < patternStr.length && valueIndex < value.length) {
    const valueChar = value[valueIndex];
    const patternChar = patternStr[patternIndex];
    const regex = PLACEHOLDERS[patternChar];

    if (regex && regex.test(valueChar)) {
      parsed = parsed.concat(valueChar);
      valueIndex += 1;
      patternIndex += 1;
    } else if (ALLOWED_CHARS.test(patternChar)) {
      parsed = parsed.concat(patternChar);
      patternIndex += 1;
      valueIndex += ALLOWED_CHARS.test(valueChar) ? 1 : 0;
    } else {
      break;
    }
  }

  return parsed;
};

Mask.propTypes = {
  value: PropTypes.string.isRequired,
  pattern: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.function,
  ]).isRequired,
};

export default Mask;
