import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import 'datalist-polyfill';

import Input from '../Input';

const Datalist = styled.datalist`
  position: relative;
  top: ${props => (props.error ? '-40px' : '-20px')};
  left: -2px;

  select {
    margin-top: initial !important;
    margin-left: initial !important;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const AutoComplete = props => {
  const { id, error } = props;
  const dataListId = `${id}_datalist`;

  return (
    <Wrapper>
      <Input {...props} list={dataListId} />

      <Datalist id={dataListId} error={error}>
        {props.dataSource.map(item => (
          <option value={item} key={`${item}`} />
        ))}
      </Datalist>
    </Wrapper>
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
