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
    content: '';
    display: none;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background-color: ${Colors.BLUE[500]};
  }
`;

const StyledRadio = styled.input.attrs({
  type: 'radio',
})`
  width: 0;
  height: 0;
  border: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  position: absolute;
`;

const RadioLabel = styled(Label)`
  cursor: pointer;
  user-select: none;

  ${StyledRadio} {
    :checked {
      ~ ${RadioMark} {
        border-color: ${Colors.BLUE[500]};
        :after {
          display: block;
          background-color: ${Colors.BLUE[500]};
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
            display: block;
            background-color: ${Colors.ERROR[500]};
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
            display: block;
            background-color: ${Colors.ERROR[500]};
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
