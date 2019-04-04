import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, ErrorMessage } from '../shared';
import Colors from '../Colors';
import Icon from '../Icon';

const CHECKBOX_SIZE = '18px';

const Wrapper = styled.div``;

const CheckboxWrapper = styled.div`
  display: flex;
  position: relative;
`;

const CheckboxLabel = styled(Label)`
  color: ${Colors.BLACK['700']};
  font-size: 16px;
  margin: 0 0 0 10px;
`;

CheckboxLabel.displayName = 'CheckboxLabel';

const CheckIcon = styled(Icon).attrs({
  name: 'check',
})``;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  cursor: pointer;
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 100%;

  + ${CheckIcon} {
    align-items: center;
    background-color: ${Colors.WHITE};
    border-radius: 2px;
    border: 2px solid ${Colors.BLACK['400']};
    box-sizing: border-box;
    color: transparent;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    height: ${CHECKBOX_SIZE};
    justify-content: center;
    margin-top: 2px;
    transition: all 0.2s ease-in-out;
    width: ${CHECKBOX_SIZE};
  }

  :checked {
    + ${CheckIcon} {
      background-color: ${Colors.BLUE['500']};
      border-width: 0;
      color: ${Colors.WHITE};
    }
  }

  :hover + ${CheckIcon}, :focus + ${CheckIcon} {
    border-color: ${Colors.BLUE['500']};
    box-shadow: 0 2px 6px 0 ${Colors.BLUE['50']};
  }

  ${({ error }) =>
    error &&
    `
    + ${CheckIcon} {
      border-color: ${Colors.ERROR['500']};
    }

    :checked + ${CheckIcon} {
      background-color: ${Colors.ERROR['500']};
    }

    :hover +  ${CheckIcon} {
      border-color: ${Colors.ERROR['500']};
      box-shadow: 0 2px 6px 0 ${Colors.ERROR['500']};
    }
  `}

  &[disabled] {
    cursor: not-allowed;

    ~ ${CheckboxLabel} {
      color: ${Colors.BLACK['400']};
    }

    + ${CheckIcon} {
      border-color: ${Colors.BLACK['400']};
      background-color: ${Colors.BLACK['200']};
    }

    :checked + ${CheckIcon} {
      background-color: ${Colors.BLACK['400']};
    }

    :hover + ${CheckIcon} {
      box-shadow: none;
    }
  }
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

const Checkbox = ({ label, error, id, ...rest }) => (
  <Wrapper>
    <CheckboxWrapper>
      <HiddenCheckbox id={id} error={error} {...rest} />
      <CheckIcon />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </CheckboxWrapper>
    {error && typeof error === 'string' && <ErrorMessage>{error}</ErrorMessage>}
  </Wrapper>
);

Checkbox.defaultProps = {
  checked: undefined,
  disabled: false,
  error: '',
  id: '',
  label: '',
  value: '',
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

export default Checkbox;
