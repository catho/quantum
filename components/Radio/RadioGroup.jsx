import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup } from '../shared';

const Group = styled(FieldGroup)`
  display: flex;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
`;

class RadioGroup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e, value) => {
    this.setState(value);
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <Group {...rest}>
        {
          React.Children.map(children, ({ type: Component, props }) => (
            <Component key={Component.displayName} {...props} />))
        }
      </Group>
    );
  }
}

/**
 * Group for Radio components.
 */

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
