import PropTypes from 'prop-types';
import React from 'react';

import { ErrorMessage, Label, FieldGroup } from '../shared';

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    }, () => this.props.onChange({
      value: this.state.value,
    }));
  }

  render() {
    const {
      id, label, error, onBlur, onFocus, value,
    } = this.props;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }
        <input
          id={id}
          type="range"
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={this.handleChange}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FieldGroup>
    );
  }
}

Range.defaultProps = {
  error: '',
  id: '',
  label: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  value: 0,
};

Range.propTypes = {
  /** Display an error message */
  error: PropTypes.string,
  /** HTML identification */
  id: PropTypes.string,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.number,
};

export default Range;
