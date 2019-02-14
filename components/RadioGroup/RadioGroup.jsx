import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup } from '../shared';
import Radio from './Radio';

const Group = styled(FieldGroup).attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: column;
`;

class RadioGroup extends React.Component {
  static Radio = Radio;

  constructor(props) {
    super(props);
    this.state = {};

    const { children, selected } = props;

    React.Children.map(children, ({ props: { value, disabled } }) => {
      const selectedRadio = selected === value;
      this.state[value] = {
        checked: selectedRadio,
        tabIndex: selectedRadio ? 0 : -1,
        disabled,
      };
    });

    const noTabIndex = !Object.values(this.state).find(
      state => state.tabIndex != -1,
    );

    const allRadioDisabled = !Object.values(this.state).filter(s => !s.disabled)
      .length;

    if (noTabIndex && !allRadioDisabled) {
      this.state[Object.keys(this.state)[0]].tabIndex = 0;
      this.firstRadio = Object.keys(this.state)[0];
      this.lastRadio = Object.keys(this.state)[
        React.Children.count(children) - 1
      ];
    }
  }

  _cleanState() {
    const { children } = this.props;

    const newState = {};

    React.Children.map(children, ({ props: { value, disabled } }) => {
      newState[value] = {
        checked: false,
        tabIndex: -1,
        disabled,
      };
    });

    return newState;
  }

  handleChange = ({ value }) => {
    const { onChange } = this.props;
    const clean = this._cleanState();

    const newState = {
      ...clean,
      [value]: {
        checked: true,
        tabIndex: 0,
        disabled: clean[value].disabled,
      },
    };

    this.setState({
      ...newState,
    });

    onChange && onChange(value);
  };

  checkPrevious = ({ value }) => {
    if (value === this.firstRadio) {
      this.check({ value });
    } else {
      const radioIds = Object.keys(this.state).filter(
        s => !this.state[s].disabled,
      );

      const index = radioIds.indexOf(value);

      this.check({ value: radioIds[index - 1] });
    }
  };

  checkNext = ({ value }) => {
    if (value === this.lastRadio) {
      this.check({ value });
    } else {
      const radioIds = Object.keys(this.state).filter(
        s => !this.state[s].disabled,
      );

      if (radioIds.length <= 1) {
        this.check({ value });
      } else {
        const index = radioIds.indexOf(value);

        this.check({ value: radioIds[index + 1] });
      }
    }
  };

  check = ({ value }) => {
    this.handleChange({ value });
  };

  render() {
    const { children, name, ...rest } = this.props;
    const groupProps = {
      name,
      checkPrevious: this.checkPrevious,
      checkNext: this.checkNext,
      check: this.check,
    };

    return (
      <Group {...rest}>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {React.Children.map(children, ({ type: Component, props }) => (
          <Component
            {...props}
            {...groupProps}
            key={props.value}
            aria-checked={this.state[props.value].checked}
            tabIndex={this.state[props.value].tabIndex}
          />
        ))}
      </Group>
    );
  }
}

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {
  selected: undefined,
};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
  /** Initialize RadioGroup with a value */
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default RadioGroup;
