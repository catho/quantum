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
    100: '#E5EDFC',
    300: '#89AAE7',
    500: '#0CC0EA',
    700: '#1250C4',
    900: '#002F7B',
  },
  secondary: {
    100: '#F7B0C8',
    300: '#F278A1',
    500: '#E91E63',
    700: '#DE0059',
    900: '#9E003F',
  },
  success: {
    100: '#dcedc8',
    300: '#c9eda2',
    500: '#7ed321',
    700: '#3b610f',
    900: '#004D40',
  },
  warning: {
    100: '#ffefd6',
    300: '#ffda6a',
    500: '#ffc107',
    700: '#f09100',
    900: '#d14900',
  },
  error: {
    100: '#ffe5e9',
    300: '#f88e86',
    500: '#ec584e',
    700: '#e91b0c',
    900: '#ac001a',
  },
  neutral: {
    0: '#ffffff',
    100: '#f2f2f2',
    300: '#e0e0e0',
    500: '#999999',
    700: '#424242',
    900: '#191919',
    1000: '#000000',
  },
};

const gutter = 8;
const baseFontSize = 16;

const spacing = {
  xxxsmall: gutter * 0.25, // 2
  xxsmall: gutter * 0.5, // 4
  xsmall: gutter * 1, // 8
  small: gutter * 1.5, // 12
  medium: gutter * 2, // 16
  large: gutter * 3, // 24
  xlarge: gutter * 4, // 32
  xxlarge: gutter * 5, // 40
  xxxlarge: gutter * 6, // 48
};

const components = {
  button: {
    skins: {
      neutral: {
        mainColor: colors.neutral,
        text: colors.neutral,
      },
      primary: {
        mainColor: colors.primary,
        text: colors.neutral,
      },
      secondary: {
        mainColor: colors.secondary,
        text: colors.neutral,
      },
      success: {
        mainColor: colors.success,
        text: colors.neutral,
      },
      warning: {
        mainColor: colors.warning,
        text: colors.neutral,
      },
      error: {
        mainColor: colors.error,
        text: colors.neutral,
      },
    },
  },
  badge: {
    skins: {
      neutral: {
        background: colors.neutral[100],
        text: colors.neutral[700],
      },
      primary: {
        background: colors.primary[700],
        text: colors.neutral[100],
      },
      error: {
        background: colors.error[500],
        text: colors.neutral[100],
      },
      success: {
        background: colors.success[100],
        text: colors.success[900],
      },
    },
  },

  tag: {
    skins: {
      neutral: {
        background: colors.neutral[100],
        text: colors.neutral[700],
      },
      primary: {
        background: colors.primary[100],
        text: colors.primary[700],
      },
      success: {
        background: colors.success[100],
        text: colors.success[900],
      },
      warning: {
        background: colors.warning[100],
        text: colors.warning[900],
      },
      error: {
        background: colors.error[100],
        text: colors.error[900],
      },
    },
  },

  popover: {
    skins: {
      neutral: {
        background: colors.neutral[0],
        text: colors.neutral[700],
      },
      success: {
        background: colors.success[100],
        text: colors.success[900],
      },
      warning: {
        background: colors.warning[100],
        text: colors.warning[900],
      },
      error: {
        background: colors.error[100],
        text: colors.error[900],
      },
    },
  },

  snackbar: {
    skins: {
      neutral: {
        background: colors.neutral[700],
        text: colors.neutral[100],
        iconColor: colors.neutral[100],
        icon: '',
      },
      primary: {
        background: colors.primary[900],
        text: colors.neutral[0],
        iconColor: colors.neutral[0],
        icon: 'info',
      },
      success: {
        background: colors.success[900],
        text: colors.neutral[0],
        iconColor: colors.neutral[0],
        icon: 'done',
      },
      warning: {
        background: colors.warning[700],
        text: colors.neutral[900],
        iconColor: colors.neutral[900],
        icon: 'warning',
      },
      error: {
        background: colors.error[900],
        text: colors.neutral[0],
        iconColor: colors.neutral[0],
        icon: 'error',
      },
    },
  },

  alert: {
    skins: {
      neutral: {
        icon: colors.neutral[700],
        background: colors.neutral[100],
        text: colors.neutral[900],
      },
      primary: {
        icon: colors.primary[700],
        background: colors.primary[100],
        text: colors.primary[900],
      },
      success: {
        icon: colors.success[700],
        background: colors.success[100],
        text: colors.success[900],
      },
      warning: {
        icon: colors.warning[700],
        background: colors.warning[100],
        text: colors.warning[900],
      },
      error: {
        icon: colors.error[700],
        background: colors.error[100],
        text: colors.error[900],
      },
    },
  },

  progressBar: {
    skins: {
      neutral: {
        titleColor: colors.neutral[1000],
        background: colors.neutral[500],
        textColor: colors.neutral[700],
      },
      primary: {
        titleColor: colors.neutral[1000],
        background: colors.primary[700],
        textColor: colors.neutral[700],
      },
      secondary: {
        titleColor: colors.neutral[1000],
        background: colors.secondary[500],
        textColor: colors.neutral[700],
      },
    },
  },

  tabbedView: {
    skins: {
      neutral: {
        activeText: colors.primary[700],
        background: 'transparent',
        hoverBackground: colors.primary[100],
        text: 'inherit',
      },
      primary: {
        activeText: colors.neutral[0],
        background: colors.primary[700],
        hoverBackground: colors.primary[900],
        text: colors.neutral[0],
      },
    },
  },
};

const theme = {
  breakpoints,
  gutter,
  colors,
  components,
  spacing,
  baseFontSize,
};

export {
  breakpoints,
  gutter,
  colors,
  components,
  spacing,
  baseFontSize,
  theme as default,
};
