import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, ErrorMessage } from '../shared';

import Radio from './Radio';
import RadioButton from './RadioButton';

const Group = styled(FieldGroup).attrs({
  role: 'radiogroup',
})`
  position: relative;
`;

const ErrorLabel = styled(ErrorMessage)`
  margin-left: -3px;
`;

ErrorLabel.displayName = 'ErrorLabel';

const RadioGroup = ({
  type,
  children,
  error,
  inline,
  name,
  onChange,
  options,
  value,
  ...rest
}) => {
  const commonProps = {
    name,
    error: Boolean(error),
    onChange,
    inline,
  };
  const radioOptions = options.map(option =>
    Object.assign({}, option, {
      key: option.value,
      checked: option.value === value ? true : undefined,
      ...commonProps,
    }),
  );

  const items =
    React.Children.map(children, child =>
      React.cloneElement(child, {
        checked: child.props.value === value ? true : undefined,
        ...commonProps,
      }),
    ) ||
    radioOptions.map(props =>
      type === 'button' ? <RadioButton {...props} /> : <Radio {...props} />,
    );

  return (
    <Group {...rest}>
      {items}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Group>
  );
};

RadioGroup.Radio = Radio;
RadioGroup.Button = RadioButton;

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {
  type: 'radio',
  children: undefined,
  error: undefined,
  inline: false,
  onChange: () => {},
  options: [],
  value: undefined,
};

RadioGroup.propTypes = {
  type: PropTypes.oneOf(['radio', 'button']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  /** Initialize RadioGroup with a value */
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default RadioGroup;
