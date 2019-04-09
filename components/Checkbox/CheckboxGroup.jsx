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
    const childrenProps = React.Children.count(children)
      ? React.Children.toArray(children).map(
          ({ props: childProps }) => childProps,
        )
      : options;

    const values = childrenProps.map(({ checked, name, value }) => ({
      checked: Boolean(checked),
      name,
      value,
    }));

    this.state = { values };
  }

  _onChange = ({ target: { checked, name } }) => {
    const { onChange } = this.props;
    const { values } = this.state;
    const item = values.find(({ name: checkboxName }) => checkboxName === name);

    item.checked = checked;

    onChange(values);

    this.setState({ values });
  };

  render() {
    const { children, error, options } = this.props;

    const commonProps = {
      error: Boolean(error),
      onChange: this._onChange,
    };
    const checkboxOptions = options.map(option =>
      Object.assign({}, option, {
        key: option.name,
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
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool,
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      name: PropTypes.string.isRequired,
      value: PropTypes.string,
    }),
  ),
};

export default CheckboxGroup;
