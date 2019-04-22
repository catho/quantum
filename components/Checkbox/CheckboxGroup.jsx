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
  _onChange = event => {
    const {
      target: { checked, name },
    } = event;

    const { onChange, children, options } = this.props;

    const items = React.Children.map(children, ({ props }) => props) || options;

    onChange(
      items.map(item => (item.name === name ? { ...item, checked } : item)),
      event,
    );
  };

  render() {
    const { children, error, options, type, inline } = this.props;
    const ItemType = type === 'checkbox' ? Checkbox : CheckboxButton;

    const checkboxes =
      children ||
      options.map(option => <ItemType {...option} key={option.name} />);

    return (
      <Group>
        <CheckboxGroupContext.Provider
          value={{
            error: Boolean(error),
            onChange: this._onChange,
            inline,
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
  inline: false,
  onChange: () => {},
  options: [],
  type: 'checkbox',
};

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  error: PropTypes.string,
  inline: PropTypes.bool,
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
  type: PropTypes.oneOf(['checkbox', 'button']),
};

export default CheckboxGroup;
