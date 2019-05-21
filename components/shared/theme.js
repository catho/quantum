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

const colors = {
  primary: {
    100: '#b8ccf1',
    300: '#5a88de',
    500: '#1355d0',
    700: '#0e44c4',
    900: '#062ab3',
  },
  secondary: {
    100: '#f5b3cd',
    300: '#e84d8b',
    500: '#de0059',
    700: '#d50048',
    900: '#c8002e',
  },
  success: {
    100: '#d8f2bc',
    300: '#a5e064',
    500: '#7ed321',
    700: '#6bc818',
    900: '#4eb70b',
  },
  warning: {
    100: '#fbdeb3',
    300: '#f5b24d',
    500: '#f09100',
    700: '#ec7e00',
    900: '#e56200',
  },
  error: {
    100: '#ffc0ca',
    300: '#ff6c82',
    500: '#ff2d4d',
    700: '#ff223d',
    900: '#ff1125',
  },
  neutral: {
    100: '#f2f2f2',
    300: '#cccccc',
    500: '#999999',
    700: '#4c4c4c',
    900: '#191919',
  },
};

const gutter = 8;

const theme = { breakpoints, gutter, colors };

export { breakpoints, gutter, colors, theme as default };
