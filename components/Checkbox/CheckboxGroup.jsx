import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, ErrorMessage } from '../shared';

import Checkbox from './Checkbox';

const Group = styled(FieldGroup)`
  position: relative;
`;

const ErrorLabel = styled(ErrorMessage)`
  margin-left: -3px;
`;

ErrorLabel.displayName = 'ErrorLabel';

const CheckboxGroup = ({
  children,
  error,
  name,
  onChange,
  options,
  value,
  ...rest
}) => {
  const _onChange = () => {
    const checkedValues = React.Children.map(children, child => child.value);

    console.log(checkedValues);
  };

  const commonProps = { name, error: Boolean(error), onChange: _onChange };
  const checkboxOptions = options.map(option =>
    Object.assign({}, option, {
      key: option.value,
      ...commonProps,
    }),
  );

  const items =
    React.Children.map(children, child =>
      React.cloneElement(child, { ...commonProps }),
    ) || checkboxOptions.map(props => <Checkbox {...props} />);

  return (
    <Group {...rest}>
      {items}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Group>
  );
};

CheckboxGroup.Checkbox = Checkbox;

/**
 * Group for Radio components.
 */
CheckboxGroup.defaultProps = {
  children: undefined,
  error: undefined,
  onChange: () => {},
  options: [],
  value: undefined,
};

CheckboxGroup.propTypes = {
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
  onChange: PropTypes.func,
  /** Initialize CheckboxGroup with a value */
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default CheckboxGroup;
