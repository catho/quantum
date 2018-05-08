import PropTypes from 'prop-types';
import React from 'react';

import { ErrorMessage, Label, FieldGroup } from '../shared';

class Range extends React.Component {
  constructor(props) {
    super(props);

    const { value } = props;

    this.state = { value };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.state.value = nextProps.value;
    }
  }

  handleChange = (e) => {
    const { onChange } = this.props;
    const { target: { value } } = e;

    this.setState({ value: Number(value) });

    onChange(e, { value: Number(value) });
  }

  render() {
    const { id, label, error } = this.props;
    const { value } = this.state;

    return (
      <FieldGroup>
        { label && <Label htmlFor={id}> {label} </Label> }
        <input
          {...this.props}
          id={id}
          value={value}
          type="range"
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
