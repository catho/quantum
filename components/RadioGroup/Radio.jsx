import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Label from '../shared/Label';

const RadioMark = styled.span`
  background-color: ${Colors.WHITE};
  border: 1.5px solid ${Colors.BLACK[400]};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 16px;
  margin-right: 5px;
  position: relative;
  top: 4px;
  width: 16px;

  :after {
    background-color: ${Colors.BLUE[500]};
    border-radius: 50%;
    content: '';
    display: none;
    height: 50%;
    left: 25%;
    position: absolute;
    top: 25%;
    width: 50%;
  }
`;

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  border: 0;
  height: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 0;
`;

const RadioLabel = styled(Label)`
  cursor: pointer;
  user-select: none;

  ${StyledRadio} {
    :checked {
      ~ ${RadioMark} {
        border-color: ${Colors.BLUE[500]};
        :after {
          background-color: ${Colors.BLUE[500]};
          display: block;
        }
      }
    }

    :focus {
      ~ ${RadioMark} {
        border-color: ${Colors.BLUE[500]};
        box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
      }
    }
  }

  :hover,
  :focus {
    ${RadioMark} {
      border-color: ${Colors.BLUE[500]};
      box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
    }
  }

  ${({ error }) =>
    error &&
    `
    ${StyledRadio} {
      :checked {
        ~ ${RadioMark} {
          border-color: ${Colors.ERROR[500]};
          :after {
            background-color: ${Colors.ERROR[500]};
            display: block;
          }
        }
      }
      :focus {
        ~ ${RadioMark} {
          border-color: ${Colors.ERROR[500]};
          box-shadow: 0 2px 6px 0 ${Colors.ERROR[500]};
        }
      }
    }

    ${RadioMark} {
      border-color: ${Colors.ERROR[500]};
    }

    :hover,
    :focus {
      ${RadioMark} {
        border-color: ${Colors.ERROR[500]};
        box-shadow: 0 2px 6px 0 ${Colors.ERROR[500]};
      }
    }
    `}



  ${({ disabled }) =>
    disabled &&
    `
    color: ${Colors.BLACK[400]};

    :hover {
      cursor: not-allowed;
    }

    ${StyledRadio} {
      :disabled {
        ~ ${RadioMark} {
          background-color: ${Colors.BLACK[200]};
        }
      }

      :checked {
        ~ ${RadioMark} {
          border-color: ${Colors.ERROR[500]};
          :after {
            background-color: ${Colors.ERROR[500]};
            display: block;
          }
        }
      }

      :checked:disabled {
        background-color: ${Colors.BLACK[400]};
        border-color: ${Colors.BLACK[400]};
        ~ ${RadioMark}:after {
          background-color: ${Colors.BLACK[400]};
        }
      }

      :focus {
        ~ ${RadioMark} {
          border-color: ${Colors.BLACK[400]};
          box-shadow: none;
        }
      }
    }

    :hover, :focus {
      ${RadioMark} {
        border-color: ${Colors.BLACK[400]};
        box-shadow: none;
      }
    }
  `}

  ${StyledRadio}:checked:disabled ~ ${RadioMark} {
    background-color: ${Colors.BLACK[400]};
    border-color: ${Colors.BLACK[400]};
    box-shadow: inset 0 0 0 3.5px ${Colors.WHITE};
  }
`;

const Radio = ({
  children,
  label,
  error,
  disabled,
  onChange,
  value,
  ...rest
}) => (
  <RadioLabel error={error} disabled={disabled}>
    <StyledRadio
      disabled={disabled}
      onChange={e => onChange({ value, label }, e)}
      {...rest}
    />
    <RadioMark />
    {children || label}
  </RadioLabel>
);

Radio.create = radio => <Radio {...radio} />;

Radio.displayName = 'RadioGroup.Radio';

Radio.defaultProps = {
  disabled: false,
  error: false,
  children: undefined,
  label: undefined,
  onChange: () => {},
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Radio;
