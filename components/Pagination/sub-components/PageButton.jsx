import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../../shared/theme';

const PageButton = styled.a.attrs(({ active, theme, ...rest }) => ({
  active: !!active,
  theme: {
    baseFontSize: defaultBaseFontSize,
    colors,
    spacing,
    ...theme,
  },
  ...rest,
}))`
  font-weight: bold;
  align-items: center;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 40px;
  min-width: 40px;
  outline: none;
  text-decoration: none;
  transition:
    background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
  user-select: none;

  ${({
    active,
    theme: {
      baseFontSize,
      colors: {
        neutral: { 0: neutral0, 300: neutral300, 700: neutral700 },
        primary: { 100: primary100, 700: primary700, 900: primary900 },
      },
      spacing: { xxsmall, xsmall },
    },
  }) => `
    background-color: ${active ? primary700 : neutral0};
    border: 1px solid ${active ? primary700 : neutral300};
    color: ${active ? neutral0 : neutral700};
    font-size: ${baseFontSize}px;
    margin: 0 ${xxsmall}px;
    padding: ${xxsmall}px ${xsmall}px;

    &:hover, &:focus {
      background-color: ${active ? primary900 : primary100};
      border-color: ${active ? primary900 : primary700};
      color: ${active ? neutral0 : primary700};
    }
  `}
`;

PageButton.displayName = 'PageButton';

PageButton.propTypes = {
  active: PropTypes.bool,
  tabIndex: PropTypes.number,
  children: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default PageButton;
