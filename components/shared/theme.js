const breakpoints = {
  xsmall: {
    columns: 4,
  },
  small: {
    width: 600,
    columns: 8,
  },
  medium: {
    width: 1024,
    columns: 12,
  },
  large: {
    width: 1440,
    columns: 12,
  },
  xlarge: {
    width: 1920,
    columns: 12,
  },
};

const gutter = 8;

const theme = { breakpoints, gutter };

export { breakpoints, gutter, theme as default };
