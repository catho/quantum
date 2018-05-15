import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PLACEHOLDERS = {
  9: /\d/
};

const Mask = (props) => {
  const { value, pattern } = props;
  let parsed = '';

  for (let i = 0; i < pattern.length; i += 1) {
    const char = value[i];
    const regex = PLACEHOLDERS[pattern[i]];
    const passed = regex ? regex.test(char) : true;

    if (!passed) break;

    parsed = parsed.concat(char);

    console.log({
      i, regex, char, passed,
    });
  }

  console.log({ pattern, value, parsed });

  return parsed;
};

Mask.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Mask;
