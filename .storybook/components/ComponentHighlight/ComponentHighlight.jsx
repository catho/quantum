import React from 'react';
import PropTypes from 'prop-types';

const nameRegex = /(&lt;\/?)(.*?)(\s|&gt;)/gm;
const propRegex = /(\s+)?(.*?)(=["{])(.*?}?)(["}])/gm;
const arrayRegex = /(\[.*?])/gms;

const COLORS = {
  COMPONENT_NAME: '#444',
  PROP_NAME: '#444',
  PROP_VALUE: '#BC6060',
};

const span = (color, content, bold) =>
  `<span style="color: ${color};${
    bold ? ' font-weight:bold' : ''
  }">${content}</span>`;

const formatCode = code =>
  code
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(
      propRegex,
      `$1${span(COLORS.PROP_NAME, '$2')}$3${span(COLORS.PROP_VALUE, '$4')}$5`,
    )
    .replace(nameRegex, `$1${span(COLORS.COMPONENT_NAME, '$2', true)}$3`)
    .replace(arrayRegex, `${span(COLORS.PROP_VALUE, '$1')}`);

const ComponentHighlight = ({ code }) => {
  const formatted = formatCode(code);

  return (
    <pre
      style={{ color: COLORS.PROP_NAME }}
      dangerouslySetInnerHTML={{
        // eslint-disable-line react/no-danger
        __html: formatted,
      }}
    />
  );
};

ComponentHighlight.propTypes = {
  code: PropTypes.string.isRequired,
};

export default ComponentHighlight;
