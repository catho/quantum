import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const StyledRadio = styled.div.attrs({
  role: 'radio',
  tabIndex: -1,
  'aria-checked': 'false',
})`
  cursor: pointer;
  display: inline-block;

  &:before {
    content: ' ';
    border-width: 1.5px;
    border-style: solid;
    border-color: ${({ error }) =>
      error ? Colors.ERROR[500] : Colors.BLACK[400]};
    ${props =>
      props.disabled &&
      `
      background-color: ${Colors.BLACK[200]};
    `}
    border-radius: 50%;
    display: inline-block;
    height: 16px;
    width: 16px;
    margin-right: 5px;

    position: relative;
    top: 4px;
  }

  &[aria-checked='true']:before {
    background-color: ${({ error }) =>
      error ? Colors.ERROR[500] : Colors.BLUE[500]};
    border-color: ${({ error }) =>
      error ? Colors.ERROR[500] : Colors.BLUE[500]};
    box-shadow: inset 0 0 0 3.5px ${Colors.WHITE};
  }

  &[aria-checked='true']:hover:before,
  &[aria-checked='true']:focus:before {
    box-shadow: inset 0 0 0 3.5px ${Colors.WHITE},
      0 2px 6px 0
        ${({ error }) => (error ? Colors.ERROR[200] : Colors.BLUE[50])};
  }

  &:hover:before,
  &:focus:before {
    border-color: ${({ error }) =>
      error ? Colors.ERROR[500] : Colors.BLUE[500]};
    box-shadow: 0 2px 6px 0
      ${({ error }) => (error ? Colors.ERROR[500] : Colors.BLUE[50])};
  }

  &[disabled] {
    color: ${Colors.BLACK[400]};
  }

  &[disabled]:before {
    background-color: ${Colors.BLACK[200]};
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }

  &[disabled]:hover:before,
  &[disabled]:focus:before {
    border-color: ${Colors.BLACK[400]};
    box-shadow: none;
  }

  &[aria-checked='true']:disabled:before {
    background-color: ${Colors.BLACK[400]};
    border-color: ${Colors.BLACK[400]};
    box-shadow: inset 0 0 0 3.5px ${Colors.WHITE};
  }
`;

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.KEYS = Object.freeze({
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
    });

    this.radioRef = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps['aria-checked']) {
      this.radioRef.focus();
    }

    return true;
  }

  onClick = () => {
    const { check, disabled } = this.props;

    if (disabled) return;

    check(this.props);
  };

  onKeyDown = event => {
    const { checkPrevious, checkNext, check } = this.props;
    let changed;

    switch (event.keyCode) {
      case this.KEYS.SPACE:
        check(this.props);
        changed = true;
        break;

      case this.KEYS.UP:
        checkPrevious(this.props);
        changed = true;
        break;

      case this.KEYS.DOWN:
        checkNext(this.props);
        changed = true;
        break;

      case this.KEYS.LEFT:
        checkPrevious(this.props);
        changed = true;
        break;

      case this.KEYS.RIGHT:
        checkNext(this.props);
        changed = true;
        break;

      default:
        break;
    }

    if (changed) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  render() {
    const { label, ...rest } = this.props;

    return (
      <StyledRadio
        {...rest}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        ref={radio => {
          this.radioRef = radio;
        }}
      >
        {label}
      </StyledRadio>
    );
  }
}

Radio.displayName = 'RadioGroup.Radio';

Radio.defaultProps = {
  check: () => {},
  checkNext: () => {},
  checkPrevious: () => {},
  disabled: false,
  error: false,
  'aria-checked': false,
};

Radio.propTypes = {
  'aria-checked': PropTypes.bool,
  check: PropTypes.func,
  checkNext: PropTypes.func,
  checkPrevious: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radio;
