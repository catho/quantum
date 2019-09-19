import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';
import Icon from '../Icon';
import { shadow } from '../shared';

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})``;

const CloseIcon = styled(Icon).attrs({
  name: 'close',
})``;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  pointer-events: none;
`;

const Switch = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 24px;
  ${({
    theme: {
      spacing: { xxlarge },
    },
  }) => `padding-left: ${xxlarge}px;`}

  &:before {
    ${({
      theme: {
        colors: {
          neutral: { 500: neutral500 },
        },
      },
    }) => `background-color: ${neutral500};`};
    border-radius: 16px;
    content: '';
    height: 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      transform 0.2s ease-in-out;
  }

  ${CloseIcon}, ${CheckIcon} {
    align-items: center;
    ${({
      theme: {
        colors: {
          neutral: { 100: neutral100, 500: neutral500 },
        },
      },
    }) => `
      background-color: ${neutral100};
      color: ${neutral500};
    `};
    border-radius: 50%;
    display: flex;
    ${({ theme: { baseFontSize: fontSize } }) =>
      `font-size: ${fontSize * 0.75}px`};
    height: 20px;
    justify-content: center;
    position: absolute;
    left: 2px;
    top: 2px;
    visibility: hidden;
    width: 20px;
    transition: transform 0.2s ease-in-out;
  }

  ${CloseIcon} {
    visibility: visible;
  }
`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
  role: 'switch',
})`
  cursor: pointer;
  height: 24px;
  left: 0;
  opacity: 0;
  position: absolute;
  pointer-events: initial;
  width: 100%;

  &:focus + ${Switch}:before {
    ${({
      theme: {
        colors: {
          primary: { 900: primary900 },
        },
      },
    }) => shadow(4, primary900)};
  }

  &:hover + ${Switch}:before {
    ${({
      theme: {
        colors: {
          neutral: { 700: neutral700 },
        },
      },
    }) => `background-color: ${neutral700};`};
  }

  &:checked + ${Switch} ${CloseIcon} {
    visibility: hidden;
    transform: translateX(18px);
  }

  &:checked + ${Switch} ${CheckIcon} {
    visibility: visible;
  }

  &:checked + ${Switch}:before {
    ${({
      theme: {
        colors: {
          primary: { 700: primary700 },
        },
      },
    }) => `background-color: ${primary700};`};
  }

  &:checked:hover + ${Switch}:before {
    ${({
      theme: {
        colors: {
          primary: { 900: primary900 },
        },
      },
    }) => `background-color: ${primary900};`};
  }

  &:checked + ${Switch} ${CheckIcon} {
    ${({
      theme: {
        colors: {
          primary: { 100: primary100, 700: primary700 },
        },
      },
    }) =>
      `background-color: ${primary100};
     color: ${primary700};`};
    transform: translateX(18px);
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Toggle = ({ checked, theme, ...rest }) => (
  <Wrapper>
    <HiddenCheckbox theme={theme} checked={checked} {...rest} />
    <Switch theme={theme}>
      <CloseIcon />
      <CheckIcon />
    </Switch>
  </Wrapper>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Toggle.defaultProps = {
  checked: null,
  theme: {
    colors,
    spacing,
    baseFontSize,
  },
};

export default Toggle;
