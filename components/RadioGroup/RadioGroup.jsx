import { Children, cloneElement } from 'react';
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

const RadioGroup = ({
  type = 'radio',
  size = 'medium',
  children = undefined,
  error = undefined,
  inline = false,
  name,
  onChange = () => {},
  options = [],
  defaultValue = undefined,
  required = false,
  ...rest
}) => {
  const commonProps = {
    name,
    size,
    error: Boolean(error),
    onChange,
    required,
  };

  const radioOptions = options.map((option) =>
    Object.assign({}, option, {
      defaultChecked: option.value === defaultValue ? true : undefined,
      ...commonProps,
    }),
  );

  const items =
    Children.map(children, (child) =>
      cloneElement(child, {
        defaultChecked: child.props.value === defaultValue ? true : undefined,
        inline: child.type === RadioButton ? inline : undefined,
        ...commonProps,
      }),
    ) ||
    radioOptions.map((props) =>
      type === 'button' ? (
        <RadioButton key={props.value} inline={inline} {...props} />
      ) : (
        <Radio key={props.value} {...props} />
      ),
    );

  return (
    <Group {...rest}>
      {items}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Group>
  );
};

RadioGroup.Radio = Radio;
RadioGroup.Button = RadioButton;

RadioGroup.propTypes = {
  type: PropTypes.oneOf(['radio', 'button']),
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
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
  defaultValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
};

export default RadioGroup;
