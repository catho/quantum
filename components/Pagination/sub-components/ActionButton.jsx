import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Colors from '../../Colors';

const StyledButton = styled.a`
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-weight: normal;
  margin: 0 4px;
  outline: none;
  padding: 8px;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;

  ${({ 'aria-disabled': ariaDisabled }) =>
    ariaDisabled
      ? `
        color: ${Colors.BLACK['200']};
        cursor: not-allowed;
      `
      : `
        :hover,
        :focus {
          background-color: ${Colors.BLUE['200']};
          border: 1px solid ${Colors.BLUE['500']};
          color: ${Colors.BLUE['500']};
        }
  `}
`;

const ActionButton = ({ onClick, ...props }) => (
  <StyledButton onClick={onClick} skin="link" {...props} />
);

ActionButton.propTypes = {
  ariaDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  ariaDisabled: false,
  onClick: () => {},
};

export default ActionButton;
