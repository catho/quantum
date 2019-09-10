import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, HiddenInput, shadow } from '../shared';
import { colors, spacing } from '../shared/theme';

const RadioMark = styled.span`
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 16px;
  position: relative;
  top: 4px;
  width: 16px;

  ${({
    theme: {
      colors: {
        neutral: { 0: white, 500: gray },
      },
      spacing: { xxsmall },
    },
  }) => `
    background-color: ${white};
    border: 1.5px solid ${gray};
    margin-right: ${xxsmall}px;
  `}

  :after {
    border-radius: 50%;
    content: '';
    display: none;
    height: 50%;
    left: 25%;
    position: absolute;
    top: 25%;
    width: 50%;

    background-color: ${({
      theme: {
        colors: {
          primary: { 500: primary },
        },
      },
    }) => primary};
  }
`;

const RadioLabel = styled(Label)`
  cursor: pointer;
  user-select: none;

  ${HiddenInput} {
    :checked {
      ~ ${RadioMark} {
        ${({
          theme: {
            colors: {
              primary: { 500: primary },
            },
          },
        }) => `
          border-color: ${primary};
          :after {
            background-color: ${primary};
            display: block;
          }
        `}
      }
    }

    :focus {
      ~ ${RadioMark} {
        ${({ theme }) => {
          const {
            colors: {
              primary: { 500: primary },
            },
          } = theme;

          return `
            border-color: ${primary};
            ${shadow(5, primary)({ theme })}
          `;
        }}
      }
    }
  }

  :hover,
  :focus {
    ${RadioMark} {
      ${({ theme }) => {
        const {
          colors: {
            primary: { 500: primary },
          },
        } = theme;

        return `
          border-color: ${primary};
          ${shadow(5, primary)({ theme })}
        `;
      }}
    }
  }

  ${({ theme, error }) => {
    const {
      colors: {
        error: { 500: errorColor },
      },
    } = theme;

    return (
      error &&
      `
      ${HiddenInput} {
        :checked {
          ~ ${RadioMark} {
            border-color: ${errorColor};
            :after {
              background-color: ${errorColor};
              display: block;
            }
          }
        }
        :focus {
          ~ ${RadioMark} {
            border-color: ${errorColor};
            ${shadow(5, errorColor)({ theme })}
          }
        }
      }

      ${RadioMark} {
        border-color: ${errorColor};
      }

      :hover,
      :focus {
        ${RadioMark} {
          border-color: ${errorColor};
          ${shadow(5, errorColor)({ theme })}
        }
      }
    `
    );
  }}

  ${({
    disabled,
    theme: {
      colors: {
        neutral: { 500: neutral500, 300: neutral300 },
        error: { 500: errorColor },
      },
    },
  }) =>
    disabled &&
    `
    color: ${neutral500};

    :hover {
      cursor: not-allowed;
    }

    ${HiddenInput} {
      :disabled {
        ~ ${RadioMark} {
          background-color: ${neutral300};
        }
      }

      :checked {
        ~ ${RadioMark} {
          border-color: ${errorColor};
          :after {
            background-color: ${errorColor};
            display: block;
          }
        }
      }

      :checked:disabled {
        background-color: ${neutral500};
        border-color: ${neutral500};
        ~ ${RadioMark}:after {
          background-color: ${neutral500};
        }
      }

      :focus {
        ~ ${RadioMark} {
          border-color: ${neutral500};
          box-shadow: none;
        }
      }
    }

    :hover, :focus {
      ${RadioMark} {
        border-color: ${neutral500};
        box-shadow: none;
      }
    }
  `}

  ${HiddenInput}:checked:disabled ~ ${RadioMark} {
    ${({
      theme: {
        colors: {
          neutral: { 0: white, 500: black },
        },
      },
    }) => `
      background-color: ${black};
      border-color: ${black};
      box-shadow: inset 0 0 0 3.5px ${white};
    `}
  }
`;

const Radio = ({
  children,
  label,
  error,
  disabled,
  onChange,
  value,
  theme,
  ...rest
}) => (
  <RadioLabel error={error} disabled={disabled} theme={theme}>
    <HiddenInput
      type="radio"
      disabled={disabled}
      onChange={e => onChange({ value, label }, e)}
      value={value}
      {...rest}
    />
    <RadioMark theme={theme} />
    {children || label}
  </RadioLabel>
);

Radio.displayName = 'RadioGroup.Radio';

Radio.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

Radio.defaultProps = {
  disabled: false,
  error: false,
  children: undefined,
  label: undefined,
  onChange: () => {},
  theme: { colors, spacing },
};

export default Radio;
