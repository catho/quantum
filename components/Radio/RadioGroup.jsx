import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup } from '../shared';

const Group = styled(FieldGroup).attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: ${props => (props.inline ? 'row' : 'column')};
`;

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    const { children } = props;

    React.Children.map(children, ({ props: { id, checked } }) => {
      this.state[id] = {
        checked: !!checked,
        tabIndex: checked ? 0 : -1,
      };
    });

    const noTabIndex = !Object.values(this.state).find(
      state => state.tabIndex != -1,
    );

    if (noTabIndex) {
      this.state[Object.keys(this.state)[0]].tabIndex = 0;
    }

    this.firstRadio = Object.keys(this.state)[0];
    this.lastRadio = Object.keys(this.state)[
      React.Children.count(children) - 1
    ];
  }

  _cleanState() {
    const { children } = this.props;

    const newState = {};

    React.Children.map(children, ({ props: { id } }) => {
      newState[id] = {
        checked: false,
        tabIndex: -1,
      };
    });

    return newState;
  }

  handleChange = ({ id }) => {
    const oldState = this._cleanState();

    this.setState({
      ...oldState,
      [id]: {
        checked: true,
        tabIndex: 0,
      },
    });
  };

  checkPrevious = ({ id }) => {
    if (id === this.firstRadio) {
      this.check({ id });
    } else {
      const radioIds = Object.keys(this.state);
      const index = radioIds.indexOf(id);

      this.check({ id: radioIds[index - 1] });
    }
  };

  checkNext = ({ id }) => {
    if (id === this.lastRadio) {
      this.check({ id });
    } else {
      const radioIds = Object.keys(this.state);
      const index = radioIds.indexOf(id);

      this.check({ id: radioIds[index + 1] });
    }
  };

  check = ({ id }) => {
    this.handleChange({ id });
  };

  render() {
    const { children, boxed, ...rest } = this.props;

    return (
      <Group {...rest}>
        {React.Children.map(children, ({ type: Component, props }) => (
          <Component
            key={props.id}
            {...props}
            aria-checked={this.state[props.id].checked}
            tabIndex={this.state[props.id].tabIndex}
            checkPrevious={this.checkPrevious}
            checkNext={this.checkNext}
            check={this.check}
          />
        ))}
      </Group>
    );
  }
}

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
