import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup, ErrorMessage } from '../shared';
import Checkbox from './Checkbox';
import CheckboxButton from './CheckboxButton';
import CheckboxGroupContext from './CheckboxGroupContext';
import { colors, spacing } from '../shared/theme';

const Group = styled(FieldGroup)`
  position: relative;
`;

class CheckboxGroup extends Component {
  _onChange = event => {
    const {
      target: { checked, name },
    } = event;

    const { onChange, children, options } = this.props;

    const items = Children.map(children, ({ props }) => props) || options;

    onChange(
      items.map(item => (item.name === name ? { ...item, checked } : item)),
      event,
    );
  };

  render() {
    const { children, error, options, type, inline, theme, size } = this.props;
    const ItemType = type === 'checkbox' ? Checkbox : CheckboxButton;

    const checkboxes =
      children ||
      options.map(option => <ItemType {...option} key={option.name} />);

    return (
      <Group theme={theme}>
        <CheckboxGroupContext.Provider
          value={{
            error: Boolean(error),
            onChange: this._onChange,
            inline,
            size,
          }}
        >
          {checkboxes}
        </CheckboxGroupContext.Provider>
        {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}
      </Group>
    );
  }
}

CheckboxGroup.Checkbox = Checkbox;
CheckboxGroup.Button = CheckboxButton;

CheckboxGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  error: PropTypes.string,
  inline: PropTypes.bool,
  /** It captures group changes. Signature: onChange(list: Array, event: SynteticEvent) */
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
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  type: PropTypes.oneOf(['checkbox', 'button']),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

/**
 * Group for Checkbox components.
 */
CheckboxGroup.defaultProps = {
  children: undefined,
  error: undefined,
  inline: false,
  onChange: () => {},
  options: [],
  size: 'medium',
  type: 'checkbox',
  theme: {
    colors,
    spacing,
  },
};

export default CheckboxGroup;
