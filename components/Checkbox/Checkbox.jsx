import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, ErrorMessage, shadow } from '../shared';
import HiddenInput from '../shared/HiddenInput';
import Icon from '../Icon';
import CheckboxGroupContext from './CheckboxGroupContext';
import { colors, spacing, baseFontSize } from '../shared/theme';

const CHECKBOX_SIZE = '24px';

const Wrapper = styled.div`
  ${({ inline }) =>
    inline &&
    `
    display: inline-block;
    margin-right: 16px;
    vertical-align: top;

    &:last-child {
      margin-right: 0;
    }
  `}
`;

const CheckboxWrapper = styled.div`
  ${({
    theme: {
      spacing: { xxsmall },
    },
  }) => `
  display: flex;
  position: relative;
  margin-top: ${xxsmall}px;
`}
`;

const CheckboxLabel = styled(Label)`
  ${({
    theme: {
      colors: {
        neutral: { 700: neutralColor },
      },
      spacing: { small },
    },
  }) => `
    color: ${neutralColor};
    margin: 0 0 0 ${small}px;

    a {
      position: relative;
      z-index: 5;
    }
  `}
`;

CheckboxLabel.displayName = 'CheckboxLabel';

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})``;

const HiddenCheckbox = styled(HiddenInput).attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  height: 100%;
  width: 100%;

  + ${CheckIcon} {
    align-items: center;
    border-radius: 2px;
    box-sizing: border-box;
    color: transparent;
    display: flex;
    font-weight: bold;
    height: ${CHECKBOX_SIZE};
    justify-content: center;
    transition: all 0.2s ease-in-out;
    width: ${CHECKBOX_SIZE};

    ${({
      theme: {
        colors: {
          neutral: { 0: neutral0, 500: neutral500 },
        },
        baseFontSize: fontSize,
      },
    }) => `
      background-color: ${neutral0};
      border: 2px solid  ${neutral500};
      font-size: ${fontSize * 1.25}px;
    `}
  }

  &:checked {
    + ${CheckIcon} {
      border-width: 0;

      ${({
        theme: {
          colors: {
            primary: { 700: primaryColor },
            neutral: { 100: neutralColor },
          },
        },
      }) => `
        background-color: ${primaryColor};
        color: ${neutralColor};
      `}
    }
  }

  &:hover + ${CheckIcon}, &:focus + ${CheckIcon} {
    ${({ theme }) => {
      const {
        colors: {
          primary: { 700: primaryColor },
        },
      } = theme;

      return `
        border-color: ${primaryColor};
        ${shadow(5, primaryColor)({ theme })}
      `;
    }}
  }

  ${({ error, theme }) => {
    const {
      colors: {
        error: { 700: errorColor },
      },
    } = theme;

    return (
      error &&
      `
      + ${CheckIcon} {
        border-color: ${errorColor};
      }

      &:checked + ${CheckIcon} {
        background-color: ${errorColor};
      }

      &:hover +  ${CheckIcon}, &:focus +  ${CheckIcon} {
        border-color: ${errorColor};
        ${shadow(5, errorColor)({ theme })}
      }
    `
    );
  }}

  &[disabled] {
    cursor: not-allowed;

    ${({
      theme: {
        colors: {
          neutral: { 500: neutral500, 300: neutral300 },
        },
      },
    }) => `
      ~ ${CheckboxLabel} {
        color: ${neutral500};
      }

      + ${CheckIcon} {
        border-color: ${neutral500};
        background-color: ${neutral300};
      }

      &:checked + ${CheckIcon} {
        background-color: ${neutral500};
      }
    `}

    &:hover + ${CheckIcon} {
      ${shadow()}
    }
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Checkbox = ({
  children = '',
  id = '',
  label = '',
  value = '',
  theme = {
    colors,
    spacing,
    baseFontSize,
  },
  error: errorProp = '',
  onChange: onChangeProp = () => {},
  checked = false,
  disabled = false,
  ...props
}) => {
  const context = useContext(CheckboxGroupContext);
  const { error: errorContext } = context;
  const { error = errorProp, onChange = onChangeProp, inline } = context;

  return (
    <Wrapper inline={inline}>
      <CheckboxWrapper theme={theme}>
        <HiddenCheckbox
          checked={checked}
          disabled={disabled}
          id={id}
          error={error}
          value={value}
          onChange={onChange}
          theme={theme}
          {...props}
        />
        <CheckIcon />
        <CheckboxLabel htmlFor={id} theme={theme}>
          {children || label || value}
        </CheckboxLabel>
      </CheckboxWrapper>
      {error && !errorContext && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
