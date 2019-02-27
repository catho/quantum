import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, ErrorMessage } from '../shared';

import Radio from './Radio';

const Group = styled(FieldGroup).attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: column;

  position: relative;
`;

const ErrorLabel = styled(ErrorMessage)`
  margin-left: -3px;
`;

ErrorLabel.displayName = 'ErrorLabel';

const RadioGroup = ({
  children,
  name,
  error,
  onChange,
  options,
  value,
  ...rest
}) => {
  const commonProps = {
    name,
    error: Boolean(error),
    onChange,
  };
  const radioOptions = options.map(option =>
    Object.assign({}, option, {
      key: option.value,
      checked: option.value === value ? true : undefined,
      ...commonProps,
    }),
  );

  const listItems =
    React.Children.map(children, child =>
      React.cloneElement(child, {
        checked: child.props.value === value ? true : undefined,
        ...commonProps,
      }),
    ) || radioOptions.map(Radio.create);

  return (
    <Group {...rest}>
      {listItems}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Group>
  );
};

RadioGroup.Radio = Radio;

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {
  value: undefined,
  error: undefined,
  children: undefined,
  options: [],
  onChange: () => {},
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onChange: PropTypes.func,
  /** Initialize RadioGroup with a value */
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default RadioGroup;
