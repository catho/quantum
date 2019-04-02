import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Button';
import Colors from '../../Colors';

const StyledButton = styled(Button)`
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-weight: normal;
  margin: 0 8px;
  outline: none;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;

  ${({ disabled }) =>
    disabled
      ? `
        color: #c9c9c9;
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
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ActionButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default ActionButton;
