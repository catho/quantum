import { css } from 'styled-components';

const query = breakpoints =>
  Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...style) => css`
      @media (min-width: ${breakpoints[label].width || 0}px) {
        ${css(...style)};
      }
    `;
    return acc;
  }, {});

const hideQueries = ({
  small: { width: smallWidth },
  medium: { width: mediumWidth },
  large: { width: largeWidth },
  xlarge: { width: xlargeWidth },
}) => ({
  xsmall: () => `
    @media (max-width: ${smallWidth - 1}px) {
      display: none !important;
    }
  `,
  small: () => `
    @media (min-width: ${smallWidth}px) and (max-width: ${mediumWidth - 1}px) {
      display: none !important;
    }
  `,
  medium: () => `
    @media (min-width: ${mediumWidth}px) and (max-width: ${largeWidth - 1}px) {
      display: none !important;
    }
  `,
  large: () => `
    @media (min-width: ${largeWidth}px) and (max-width: ${xlargeWidth - 1}px) {
      display: none !important;
    }
  `,
  xlarge: () => `
    @media (min-width: ${xlargeWidth}px) {
      display: none !important;
    }
  `,
});

export { query, hideQueries };
