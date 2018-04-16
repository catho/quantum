import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, FieldGroup } from '../shared';

const CheckBoxLabel = styled(Label)`
  display: initial;
`;

class Checkbox extends React.Component {
  onClick = () => {
    this.props.onChange({ checked: !this.props.checked });
  }

  render() {
    const {
      id,
      label,
      onChange,
      checked,
      ...props
    } = this.props;

    return (
      <FieldGroup key={label} onClick={this.onClick}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          {...props}
        />
        {label && <CheckBoxLabel htmlFor={id}> {label} </CheckBoxLabel>}
      </FieldGroup>
    );
  }
}

Checkbox.defaultProps = {
  id: '',
  checked: false,
  label: 'Checkbox',
  onChange: () => {},
};

Checkbox.propTypes = {
  /** An html identification */
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
