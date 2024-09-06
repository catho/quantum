import { Children, useMemo } from 'react';
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

const CheckboxGroup = ({
  children = undefined,
  onChange = () => {},
  error = undefined,
  options = [],
  type = 'checkbox',
  inline = false,
  theme = {
    colors,
    spacing,
  },
  size = 'medium',
}) => {
  const _onChange = (event) => {
    const {
      target: { checked, name },
    } = event;

    const items = Children.map(children, ({ props }) => props) || options;

    onChange(
      items.map((item) => (item.name === name ? { ...item, checked } : item)),
      event,
    );
  };

  const checkboxes = () => {
    const ItemType = type === 'checkbox' ? Checkbox : CheckboxButton;
    return (
      children ||
      options.map((option) => <ItemType {...option} key={option.name} />)
    );
  };

  const valueProvider = useMemo(
    () => ({
      error: Boolean(error),
      onChange: _onChange,
      inline,
      size,
    }),
    [error, inline, size, _onChange],
  );

  return (
    <Group theme={theme}>
      <CheckboxGroupContext.Provider value={valueProvider}>
        {checkboxes()}
      </CheckboxGroupContext.Provider>
      {error && <ErrorMessage theme={theme}>{error}</ErrorMessage>}
    </Group>
  );
};

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

export default CheckboxGroup;
