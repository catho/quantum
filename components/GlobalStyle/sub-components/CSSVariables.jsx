import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { theme as defaultTheme } from '../../shared';

const CSSVariables = createGlobalStyle`
  ${({
    theme: {
      breakpoints: {
        small: { width },
      },
      gutter,
    },
  }) => `
    :root {
      --gutter: ${gutter * 2}px;
    }

    @media (min-width: ${width}px) {
      :root {
        --gutter: ${gutter * 3}px;
      }
    }
  `}
`;

CSSVariables.defaultProps = {
  theme: defaultTheme,
};

CSSVariables.propTypes = {
  theme: PropTypes.shape({
    breakpoints: PropTypes.object,
    gutter: PropTypes.number,
  }),
};

export default CSSVariables;
