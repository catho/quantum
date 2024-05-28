export interface breakpointsProps {
  xsmall: {
    width: number;
    columns: number;
  };
  small: {
    width: number;
    columns: number;
  };
  medium: {
    width: number;
    columns: number;
  };
  large: {
    width: number;
    columns: number;
  };
}

export interface colorsProps {
  primary: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  secondary: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  success: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  warning: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  error: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  neutral: {
    0: string;
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
    1000: string;
  };
}

export type gutterType = number;
export type baseFontSizeType =  number;

export interface spacingProps {
  xxxsmall: number;
  xxsmall: number; 
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number; 
  xxlarge: number;
  xxxlarge: number;
}


export interface componentsProps {
  button: {
    skins: {
      neutral: {
        mainColor: colorsProps["neutral"];
        text: colorsProps["neutral"];
      };
      primary: {
        mainColor: colorsProps["primary"];
        text: colorsProps["neutral"];
      };
      secondary: {
        mainColor: colorsProps["secondary"];
        text: colorsProps["neutral"];
      };
      success: {
        mainColor: colorsProps["success"];
        text: colorsProps["neutral"];
      };
      warning: {
        mainColor: colorsProps["warning"];
        text: colorsProps["neutral"];
      };
      error: {
        mainColor: colorsProps["error"];
        text: colorsProps["neutral"];
      };
    };
  };
  tag: {
    skins: {
      neutral: {
        background: colorsProps["neutral"][100];
        text: colorsProps["neutral"][700];
      };
      primary: {
        background: colorsProps["primary"][100];
        text: colorsProps["primary"][700];
      };
      success: {
        background: colorsProps["success"][100];
        text: colorsProps["success"][900];
      };
      warning: {
        background: colorsProps["warning"][100];
        text: colorsProps["warning"][900];
      };
      error: {
        background: colorsProps["error"][100];
        text: colorsProps["error"][900];
      };
    };
  };

  popover: {
    skins: {
      neutral: {
        background: colorsProps["neutral"][0];
        text: colorsProps["neutral"][700];
      };
      primary: {
        background: colorsProps["primary"][100];
        text: colorsProps["neutral"][700];
      };
      success: {
        background: colorsProps["success"][100];
        text: colorsProps["success"][900];
      };
      warning: {
        background: colorsProps["warning"][100];
        text: colorsProps["neutral"][700];
      };
      error: {
        background: colorsProps["error"][100];
        text: colorsProps["neutral"][700];
      };
    };
  };

  snackbar: {
    skins: {
      neutral: {
        background: colorsProps["neutral"][700];
        text: colorsProps["neutral"][100];
        iconColor: colorsProps["neutral"][100];
        icon: string;
      };
      primary: {
        background: colorsProps["primary"][900];
        text: colorsProps["neutral"][0];
        iconColor: colorsProps["neutral"][0];
        icon: string;
      };
      success: {
        background: colorsProps["success"][900];
        text: colorsProps["neutral"][0];
        iconColor: colorsProps["neutral"][0];
        icon: string;
      };
      warning: {
        background: colorsProps["warning"][700];
        text: colorsProps["neutral"][900];
        iconColor: colorsProps["neutral"][900];
        icon: string;
      };
      error: {
        background: colorsProps["error"][900];
        text: colorsProps["neutral"][0];
        iconColor: colorsProps["neutral"][0];
        icon: string;
      };
    };
  };

  alert: {
    skins: {
      neutral: {
        icon: colorsProps["neutral"][700];
        background: colorsProps["neutral"][300];
        text: colorsProps["neutral"][700];
      };
      primary: {
        icon: colorsProps["primary"][700];
        background: colorsProps["primary"][100];
        text: colorsProps["neutral"][700];
      };
      success: {
        icon: colorsProps["success"][900];
        background: colorsProps["success"][100];
        text: colorsProps["success"][900];
      };
      warning: {
        icon: colorsProps["warning"][700];
        background: colorsProps["warning"][100];
        text: colorsProps["neutral"][700];
      };
      error: {
        icon: colorsProps["error"][700];
        background: colorsProps["error"][100];
        text: colorsProps["error"][900];
      };
    };
  };

  progressBar: {
    skins: {
      neutral: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["neutral"][500];
        textColor: colorsProps["neutral"][700];
      };
      primary: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["primary"][700];
        textColor: colorsProps["neutral"][700];
      };
      secondary: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["secondary"][500];
        textColor: colorsProps["neutral"][700];
      };
    };
  };

  chargeBar: {
    skins: {
      neutral: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["neutral"][700];
      };
      primary: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["primary"][700];
      };
      secondary: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["secondary"][700];
      };
      success: {
        titleColor: colorsProps["neutral"][1000];
        background: colorsProps["success"][700];
      };
    };
  };

  tabbedView: {
    skins: {
      neutral: {
        border: colorsProps["neutral"][300];
        activeText: colorsProps["primary"][700];
        background: string;
        hoverBackground: colorsProps["primary"][100];
        text: string;
      };
      primary: {
        border: colorsProps["neutral"][100];
        activeText: colorsProps["neutral"][0];
        background: colorsProps["primary"][700];
        hoverBackground: string;
        text: colorsProps["neutral"][0];
      };
    };
  };
}

interface themeProps {
  breakpoints: breakpointsProps;
  gutter: gutterType;
  colors: colorsProps;
  components: componentsProps;
  spacing: spacingProps;
  baseFontSize: baseFontSizeType;
}

declare const theme: themeProps;
declare const breakpoints: breakpointsProps;
declare const gutter: gutterType;
declare const colors: colorsProps;
declare const components: componentsProps;
declare const spacing: spacingProps;
declare const baseFontSize: baseFontSizeType;

export { theme, breakpoints, gutter, colors, components, spacing, baseFontSize };

export default theme;
