import { css } from 'styled-components';
import BREAKPOINTS from './breakpoints';

const query = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label].width}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const hideQueries = {
  xlarge: () => `
    @media (min-width: ${BREAKPOINTS.xlarge.width + 1}px) {
      display: none !important;
    }
  `,
  large: () => `
    @media (min-width: ${BREAKPOINTS.large.width + 1}px) and (max-width: ${
    BREAKPOINTS.xlarge.width
  }px) {
      display: none !important;
    }
  `,
  medium: () => `
    @media (min-width: ${BREAKPOINTS.medium.width + 1}px) and (max-width: ${
    BREAKPOINTS.large.width
  }px) {
      display: none !important;
    }
  `,
  small: () => `
    @media (min-width: ${BREAKPOINTS.small.width + 1}px) and (max-width: ${
    BREAKPOINTS.medium.width
  }px) {
      display: none !important;
    }
  `,
  xsmall: () => `
    @media (max-width: ${BREAKPOINTS.small.width}px) {
      display: none !important;
    }
  `,
};

export { query, hideQueries };
