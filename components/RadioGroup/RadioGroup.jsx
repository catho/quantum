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
      state => state.tabIndex !== -1,
    );

    const allRadioDisabled = !Object.values(this.state).filter(s => !s.disabled)
      .length;

    if (noTabIndex && !allRadioDisabled) {
      const [firstState] = Object.keys(this.state);
      const { [firstState]: firstRadio } = this.state;

      this.firstRadio = firstState;
      firstRadio.tabIndex = 0;

      this.lastRadio = Object.keys(this.state)[
        React.Children.count(children) - 1
      ];
    }
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

    if (onChange) {
      onChange(value);
    }
  };

  checkPrevious = ({ value }) => {
    if (value === this.firstRadio) {
      this.check({ value });
    } else {
      const radioIds = Object.keys(this.state).filter(s => {
        const { [s]: state } = this.state;

        return !state.disabled;
      });

      const index = radioIds.indexOf(value);

      this.check({ value: radioIds[index - 1] });
    }
  };

  checkNext = ({ value }) => {
    if (value === this.lastRadio) {
      this.check({ value });
    } else {
      const radioIds = Object.keys(this.state).filter(s => {
        const { [s]: state } = this.state;

        return !state.disabled;
      });

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
        {React.Children.map(children, ({ type: Component, props }) => {
          const {
            [props.value]: { checked, tabIndex },
          } = this.state;

          return (
            <Component
              {...props}
              {...groupProps}
              key={props.value}
              aria-checked={checked}
              tabIndex={tabIndex}
            />
          );
        })}
      </Group>
    );
  }
}

/**
 * Group for Radio components.
 */
RadioGroup.defaultProps = {
  selected: undefined,
  onChange: () => {},
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
  name: PropTypes.string.isRequired,
};

export default RadioGroup;
