import { css } from 'styled-components';
import BREAKPOINTS from './breakpoints';

const query = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const hide = {
  xlarge: () => `
    @media (min-width: ${BREAKPOINTS.xlarge + 1}px) {
      display: none !important;
    }
  `,
  large: () => `
    @media (min-width: ${BREAKPOINTS.large + 1}px) and (max-width: ${
    BREAKPOINTS.xlarge
  }px) {
      display: none !important;
    }
  `,
  medium: () => `
    @media (min-width: ${BREAKPOINTS.medium + 1}px) and (max-width: ${
    BREAKPOINTS.large
  }px) {
      display: none !important;
    }
  `,
  small: () => `
    @media (min-width: ${BREAKPOINTS.small + 1}px) and (max-width: ${
    BREAKPOINTS.medium
  }px) {
      display: none !important;
    }
  `,
  xsmall: () => `
    @media (max-width: ${BREAKPOINTS.small}px) {
      display: none !important;
    }
  `,
};

export { query, hide };
