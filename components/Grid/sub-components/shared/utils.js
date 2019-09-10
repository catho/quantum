import { hideQueries } from './media';

const hide = ({ hide: hideProp, theme: { breakpoints } }) =>
  hideProp &&
  []
    .concat([], hideProp)
    .map(breakpoint => hideQueries(breakpoints)[breakpoint]());

const calcGutter = (gutter, noGuttersProp, onlyValue = false) => {
  let returnValue = '0';
  if (gutter) {
    returnValue = noGuttersProp ? '0' : `${gutter}`;
  }

  return `${returnValue.replace('px', '')}${onlyValue ? '' : 'px'}`;
};

export { hide, calcGutter };
