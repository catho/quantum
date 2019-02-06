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
  hd: () => `
    @media (min-width: ${BREAKPOINTS.large + 1}px) {
      display: none !important;
    }
  `,
  large: () => `
    @media (min-width: ${BREAKPOINTS.desktop + 1}px) and (max-width: ${
    BREAKPOINTS.large
  }px) {
      display: none !important;
    }
  `,
  desktop: () => `
    @media (min-width: ${BREAKPOINTS.tablet + 1}px) and (max-width: ${
    BREAKPOINTS.desktop
  }px) {
      display: none !important;
    }
  `,
  tablet: () => `
    @media (min-width: ${BREAKPOINTS.phone + 1}px) and (max-width: ${
    BREAKPOINTS.tablet
  }px) {
      display: none !important;
    }
  `,
  phone: () => `
    @media (max-width: ${BREAKPOINTS.phone}px) {
      display: none !important;
    }
  `,
};

export { query, hide };
