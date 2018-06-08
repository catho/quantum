import PropTypes from 'prop-types';
import React from 'react';

import Input from '../Input';

const AutoComplete = (props) => {
  const { id } = props;
  const dataListId = `${id}_datalist`;

  return (
    <React.Fragment>
      <Input
        {...props}
        list={dataListId}
      />

      <datalist id={dataListId}>
        {
          props.dataSource.map(item => (
            <option value={item} key={`${item}`} />
          ))
        }
      </datalist>
    </React.Fragment>
  );
};

AutoComplete.defaultProps = {
  value: '',
  label: '',
  error: '',
  maxLength: '',
  id: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  dataSource: [],
};

AutoComplete.propTypes = {
  value: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Display an error message and changes border color to error color */
  error: PropTypes.string,
  /** Set a text mask that filter user input */
  maxLength: PropTypes.string,
  /** An html identification */
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  dataSource: PropTypes.arrayOf(String),
};

export default AutoComplete;
