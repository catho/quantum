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

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);

    const { children, options } = this.props;
    const values = {};
    const childrenProps = React.Children.count(children)
      ? React.Children.toArray(children).map(
          ({ props: childProps }) => childProps,
        )
      : options;

    childrenProps.forEach(({ value, checked }) => {
      values[value] = Boolean(checked);
    });

    this.state = { values };
  }

  _onChange = ({ target: { checked, value } }) => {
    const { onChange } = this.props;
    const { values: stateValues } = this.state;

    const values = {
      ...stateValues,
      [value]: checked,
    };

    onChange(values);

    this.setState({ values });
  };

  render() {
    const { children, error, name, options } = this.props;

    const commonProps = {
      name,
      error: Boolean(error),
      onChange: this._onChange,
    };
    const checkboxOptions = options.map(option =>
      Object.assign({}, option, {
        key: option.value,
        ...commonProps,
      }),
    );

    const checkboxes =
      React.Children.map(children, child =>
        React.cloneElement(child, commonProps),
      ) || checkboxOptions.map(childProps => <Checkbox {...childProps} />);

    return (
      <Group>
        {checkboxes}
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </Group>
    );
  }
}

CheckboxGroup.Checkbox = Checkbox;

/**
 * Group for Radio components.
 */
CheckboxGroup.defaultProps = {
  children: undefined,
  error: undefined,
  onChange: () => {},
  options: [],
};

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
    }),
  ),
};

export default CheckboxGroup;
