import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import { FieldGroup, Label } from '../shared';

import Radio from './Radio';

const Group = styled(FieldGroup).attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: column;

  position: relative;
`;

const ErrorLabel = styled(Label)`
  color: ${Colors.ERROR['900']};
  cursor: text;
  font-weight: 600;
  font-style: italic;
  font-size: 14px;
  left: -3px;
  position: absolute;

  bottom: -30px;
`;

ErrorLabel.displayName = 'ErrorLabel';

class RadioGroup extends React.Component {
  static Radio = Radio;

  render() {
    const { children, name, error, options, ...rest } = this.props;

    const radioOptions = options.map(option =>
      Object.assign({}, option, { name }),
    );

    const listItems = children || radioOptions.map(Radio.create);

    return (
      <Group {...rest}>
        {listItems}
        {error && <ErrorLabel>{error}</ErrorLabel>}
      </Group>
    );
  }
}

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {
  value: undefined,
  error: undefined,
  options: [],
  onChange: () => {},
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
  /** Initialize RadioGroup with a value */
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
};

export default RadioGroup;
