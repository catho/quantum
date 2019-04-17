import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ButtonGroupLabel } from '../shared';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';

const ID_GENERATOR = uniqId('checkbox-button-');

// import Colors from '../Colors';
// import Icon from '../Icon';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

class CheckboxButton extends React.Component {
  constructor(props) {
    super(props);

    const { id } = props;

    this._id = id || ID_GENERATOR.next().value;
  }

  render() {
    const {
      children,
      error,
      id,
      label,
      value,
      checked,
      disabled,
      ...props
    } = this.props;

    const skin = checked ? 'primary' : 'secondary';

    console.log({ checked });

    return (
      <Wrapper>
        <HiddenInput
          type="checkbox"
          {...props}
          id={this._id}
          error={error}
          value={value}
        />
        <ButtonGroupLabel
          htmlFor={this._id}
          checked={checked}
          disabled={disabled}
          skin={skin}
        >
          {children || label || value}
        </ButtonGroupLabel>
      </Wrapper>
    );
  }
}

CheckboxButton.defaultProps = {
  checked: false,
  children: '',
  disabled: false,
  error: '',
  id: '',
  label: '',
  onChange: () => {},
  value: '',
};

CheckboxButton.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CheckboxButton.displayName = 'CheckboxButton';

export default CheckboxButton;
