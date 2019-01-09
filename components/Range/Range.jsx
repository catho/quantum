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
    const { value } = this.state;

    if (nextProps.value !== value) {
      this.state.value = nextProps.value;
    }
  }

  handleChange = e => {
    const { onChange } = this.props;
    const {
      target: { value },
    } = e;

    this.setState({ value: Number(value) });

    onChange(e, { value: Number(value) });
  };

  render() {
    const { id, label, error } = this.props;
    const { value } = this.state;

    return (
      <FieldGroup>
        {label && <Label htmlFor={id}> {label} </Label>}
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
  value: 0,
  label: '',
  error: '',
  id: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
};

Range.propTypes = {
  value: PropTypes.number,
  /** Display a label text that describe the field */
  label: PropTypes.string,
  /** Display an error message */
  error: PropTypes.string,
  /** HTML identification */
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Range;
