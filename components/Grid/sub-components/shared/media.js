import { css } from 'styled-components';
import { BREAKPOINTS } from '../../../shared';

const query = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label].width}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const hideQueries = ({
  xsmall: { maxWidth: xsmallMaxWidth },
  small: { maxWidth: smallMaxWidth },
  medium: { maxWidth: mediumMaxWidth },
  large: { maxWidth: largeMaxWidth },
}) => ({
  xsmall: () => `
    @media (max-width: ${xsmallMaxWidth}px) {
      display: none !important;
    }
  `,
  small: () => `
    @media (min-width: ${xsmallMaxWidth +
      1}px) and (max-width: ${smallMaxWidth}px) {
      display: none !important;
    }
  `,
  medium: () => `
    @media (min-width: ${smallMaxWidth +
      1}px) and (max-width: ${mediumMaxWidth}px) {
      display: none !important;
    }
  `,
  large: () => `
    @media (min-width: ${mediumMaxWidth +
      1}px) and (max-width: ${largeMaxWidth}px) {
      display: none !important;
    }
  `,
  xlarge: () => `
    @media (min-width: ${largeMaxWidth + 1}px) {
      display: none !important;
    }
  `,
});

export { query, hideQueries };
