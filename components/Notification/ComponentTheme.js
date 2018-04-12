import { darken } from 'polished';

const ComponentColors = {
  DEFAULT: '#cce5ff',
  SUCCESS: '#d4edda',
  WARNING: '#fff3cd',
  ERROR: '#f8d7da',
  INFO: '#d1ecf1',
};

const ComponentTheme = {
  default: {
    backgroundColor: ComponentColors.DEFAULT,
    borderColor: darken(0.05, ComponentColors.DEFAULT),
    color: darken(0.5, ComponentColors.DEFAULT),
  },
  success: {
    backgroundColor: ComponentColors.SUCCESS,
    borderColor: darken(0.05, ComponentColors.SUCCESS),
    color: darken(0.5, ComponentColors.SUCCESS),
  },
  warning: {
    backgroundColor: ComponentColors.WARNING,
    borderColor: darken(0.05, ComponentColors.WARNING),
    color: darken(0.5, ComponentColors.WARNING),
  },
  error: {
    backgroundColor: ComponentColors.ERROR,
    borderColor: darken(0.05, ComponentColors.ERROR),
    color: darken(0.5, ComponentColors.ERROR),
  },
  info: {
    backgroundColor: ComponentColors.INFO,
    borderColor: darken(0.05, ComponentColors.INFO),
    color: darken(0.5, ComponentColors.INFO),
  },
};

export default ComponentTheme;
