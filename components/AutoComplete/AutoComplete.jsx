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
  error: '',
  id: '',
  label: '',
  maxLength: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  value: '',
  dataSource: [],
};

AutoComplete.propTypes = {
  /** Display an error message and changes border color to error color */
  error: PropTypes.string,
  /** An html identification */
  id: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Set a text mask that filter user input */
  maxLength: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  dataSource: PropTypes.arrayOf(String),
};

export default AutoComplete;
