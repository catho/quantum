import { hideQueries } from './media';

const hide = ({ hide: hideProp, theme: { breakpoints } }) =>
  hideProp &&
  []
    .concat([], hideProp)
    .map(breakpoint => hideQueries(breakpoints)[breakpoint]());

const calcGutter = ({ 'no-gutters': noGuttersProp, theme }) => {
  if (theme && theme.gutter) {
    return noGuttersProp ? '0px' : `${theme.gutter}px`;
  }

  return '0px';
};

export { hide, calcGutter };
