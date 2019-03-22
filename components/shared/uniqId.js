let _counter = 0;

export default (prefix = '') => {
  const _id = `${prefix}${_counter}`;
  _counter += 1;

  return _id;
};
