import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, ErrorMessage } from '../shared';
import Checkbox from './Checkbox';
import CheckboxButton from './CheckboxButton';
import CheckboxGroupContext from './CheckboxGroupContext';

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

    const items = React.Children.count(children)
      ? React.Children.toArray(children).map(
          ({ props: childProps }) => childProps,
        )
      : options;

    this.state = {
      items: items.map(({ checked, name, value }) => ({
        checked: Boolean(checked),
        name,
        value,
      })),
    };
  }

  _onChange = event => {
    const {
      target: { checked, name },
    } = event;
    const { onChange } = this.props;
    const { items } = this.state;

    const newItems = items.map(item =>
      item.name === name ? { ...item, checked } : item,
    );

    onChange(event, newItems);

    this.setState({ items: newItems });
  };

  render() {
    const { children, error, options } = this.props;

    const checkboxes =
      children ||
      options.map(option => (
        <Checkbox {...Object.assign({}, option, { key: option.name })} />
      ));

    return (
      <Group>
        <CheckboxGroupContext.Provider
          value={{
            error: Boolean(error),
            onChange: this._onChange,
          }}
        >
          {checkboxes}
        </CheckboxGroupContext.Provider>
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </Group>
    );
  }
}

CheckboxGroup.Checkbox = Checkbox;
CheckboxGroup.Button = CheckboxButton;

/**
 * Group for Checkbox components.
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
  /** It captures group changes. Signature: onChange(event: SynteticEvent, list: Array) */
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
