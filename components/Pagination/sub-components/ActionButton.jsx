import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, spacing } from '../../shared/theme';

const ActionButton = styled.a`
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-weight: normal;
  outline: none;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  border-radius: 4px;
  border: 2px solid transparent;

  ${({
    theme: {
      colors: {
        primary: { 100: primary100, 700: primary700 },
      },
      spacing: { xsmall, xxsmall },
    },
  }) => `
    margin: 0 ${xxsmall}px;
    padding: ${xsmall}px;
    color: ${primary700};

    &[aria-disabled=true] {
      display: none;
    }

    &[aria-disabled=false] {
      :hover,
      :focus {
        background-color: ${primary100};
        border: 2px solid ${primary700};
      }
    }
  `}
`;

ActionButton.propTypes = {
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

ActionButton.defaultProps = {
  onClick: () => {},
  theme: {
    colors,
    spacing,
  },
};

export default ActionButton;
