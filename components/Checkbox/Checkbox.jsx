import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, ErrorMessage, shadow } from '../shared';
import HiddenInput from '../shared/HiddenInput';
import Icon from '../Icon';
import CheckboxGroupContext from './CheckboxGroupContext';
import { colors, spacing } from '../shared/theme';

const CHECKBOX_SIZE = '18px';

const Wrapper = styled.div``;

const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
`;

const CheckboxLabel = styled(Label)`
  color: ${({
    theme: {
      colors: { neutral },
    },
  }) => neutral[700]};
  font-size: 16px;
  margin: ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `0 0 0 ${xsmall}px`};
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
    font-size: 16px;
    font-weight: bold;
    height: ${CHECKBOX_SIZE};
    justify-content: center;
    margin-top: ${({
      theme: {
        spacing: { xxxsmall },
      },
    }) => `${xxxsmall}px`};
    transition: all 0.2s ease-in-out;
    width: ${CHECKBOX_SIZE};

    ${({
      theme: {
        colors: { neutral },
      },
    }) => `
      background-color: ${neutral[100]};
      border: 2px solid  ${neutral[500]};
    `}
  }

  :checked {
    + ${CheckIcon} {
      border-width: 0;

      ${({
        theme: {
          colors: { primary, neutral },
        },
      }) => `
        background-color: ${primary[500]};
        color: ${neutral[100]};
      `}
    }
  }

  :hover + ${CheckIcon}, :focus + ${CheckIcon} {
    ${({ theme }) => {
      const {
        colors: { primary },
      } = theme;

      return `
        border-color: ${primary[500]};
        ${shadow(5, primary[500])({ theme })}
      `;
    }}
  }

  ${({ error, theme }) => {
    const {
      colors: {
        error: { 500: errorColor },
      },
    } = theme;

    return (
      error &&
      `
      + ${CheckIcon} {
        border-color: ${errorColor};
      }

      :checked + ${CheckIcon} {
        background-color: ${errorColor};
      }

      :hover +  ${CheckIcon}, :focus +  ${CheckIcon} {
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
        colors: { neutral },
      },
    }) => `
      ~ ${CheckboxLabel} {
        color: ${neutral[500]};
      }

      + ${CheckIcon} {
        border-color: ${neutral[500]};
        background-color: ${neutral[300]};
      }

      :checked + ${CheckIcon} {
        background-color: ${neutral[500]};
      }
    `}

    :hover + ${CheckIcon} {
      ${shadow(0)}
    }
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Checkbox = ({
  children,
  id,
  label,
  value,
  theme,
  error: errorProp,
  onChange: onChangeProp,
  ...props
}) => {
  const context = useContext(CheckboxGroupContext);
  const { error: errorContext } = context;
  const { error = errorProp, onChange = onChangeProp } = context;

  return (
    <Wrapper>
      <CheckboxWrapper>
        <HiddenCheckbox
          {...props}
          id={id}
          error={error}
          value={value}
          onChange={onChange}
          theme={theme}
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
  children: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  children: '',
  error: '',
  id: '',
  label: '',
  value: '',
  onChange: () => {},
  theme: {
    colors,
    spacing,
  },
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
