import { hideQueries } from './media';

const hide = props =>
  props.hide && [].concat([], props.hide).map(prop => hideQueries[prop]());

const noGutters = ({ 'no-gutters': noGuttersProp }) =>
  noGuttersProp && '--gutter: 0px;';

export { hide, noGutters };
