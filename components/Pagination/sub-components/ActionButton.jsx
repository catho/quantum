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

  ${({
    theme: {
      colors: {
        neutral: { 300: neutral300 },
        primary: { 100: primary100, 500: primary500 },
      },
      spacing: { xsmall, xxsmall },
    },
  }) => `
    margin: 0 ${xxsmall}px;
    padding: ${xsmall}px;

      &[aria-disabled=true] {
        color: ${neutral300};
        cursor: not-allowed;
      }

      &[aria-disabled=false] {
        :hover,
        :focus {
          background-color: ${primary100};
          border: 1px solid ${primary500};
          color: ${primary500};
        }
      }
    }
  `}
`;

ActionButton.propTypes = {
  onClick: PropTypes.func,
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
