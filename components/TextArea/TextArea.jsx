import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ label }) => (
  <>
    {label}
    <textarea />
  </>
);

TextArea.defaultProps = {
  label: 'Textarea label',
};

TextArea.propTypes = {
  label: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
