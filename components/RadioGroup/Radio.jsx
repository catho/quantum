import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const StyledRadio = styled.input.attrs({
  type: 'radio',
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
  static create = radio => <Radio label={radio} />;

  render() {
    const { label, ...rest } = this.props;

    return <StyledRadio {...rest} />;
  }
}

Radio.displayName = 'RadioGroup.Radio';

Radio.defaultProps = {
  disabled: false,
  error: false,
  onChange: () => {},
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Radio;
