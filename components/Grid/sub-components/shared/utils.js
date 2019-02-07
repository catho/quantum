import { hide } from './media';

const hideCb = props =>
  props.hide && [].concat([], props.hide).map(prop => hide[prop]());
const noGuttersCb = ({ 'no-gutters': noGutters }) =>
  noGutters && '--gutter: 0px;';
const collumnSize = (breakpoint, queryCb) =>
  breakpoint &&
  queryCb`width: calc(${breakpoint} / var(--grid-column) * 100% - var(--gutter));`;

export { hideCb, noGuttersCb, collumnSize };
