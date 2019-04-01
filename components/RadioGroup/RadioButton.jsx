import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Colors from '../Colors';
import Button from '../Button';
import { INPUT_STYLE } from '../shared';

const { ERROR_STYLE, ERROR_HOVER_STYLE } = INPUT_STYLE;

const StyledButton = styled(Button)`
  ${({ error }) =>
    error &&
    css`
    ${ERROR_STYLE}
    color: ${Colors.ERROR['500']};

    :hover, :focus {
      ${ERROR_HOVER_STYLE};
      color: ${Colors.ERROR['500']};
      background-color: ${Colors.ERROR['200']};
    }
  `}
`;

const RadioButton = ({
  children,
  label,
  onChange,
  value,
  checked,
  ...rest
}) => {
  const skin = checked ? 'primary' : 'secondary';

  return (
    <StyledButton skin={skin} {...rest}>
      {children}
    </StyledButton>
  );
};

RadioButton.displayName = 'RadioGroup.Radio';

RadioButton.defaultProps = {
  disabled: false,
  checked: false,
  children: undefined,
  label: undefined,
  onChange: () => {},
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  children: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default RadioButton;
