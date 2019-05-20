import { hideQueries } from './media';

const hide = ({ hide: hideProp, theme: { breakpoints } }) =>
  hideProp &&
  []
    .concat([], hideProp)
    .map(breakpoint => hideQueries(breakpoints)[breakpoint]());

const noGutters = ({ 'no-gutters': noGuttersProp }) =>
  noGuttersProp && '--gutter: 0px;';

export { hide, noGutters };
