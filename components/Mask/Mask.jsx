import PropTypes from 'prop-types';

const PLACEHOLDERS = { 9: /\d/ };
const ALLOWED_CHARS = /[\s()./-]/;

const Mask = ({ value, pattern }) => {
  if (!pattern) return value;

  let parsed = '';
  let valueIndex = 0;
  let patternIndex = 0;

  while (patternIndex < pattern.length && valueIndex < value.length) {
    const valueChar = value[valueIndex];
    const patternChar = pattern[patternIndex];
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
  pattern: PropTypes.string.isRequired,
};

export default Mask;
