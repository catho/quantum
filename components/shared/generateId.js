let _counter = 0;

export default ({ prefix = '', id: defaultId }) => {
  const _id = `${prefix}${defaultId || _counter}`;
  _counter += _counter + 1;
  return _id;
};
