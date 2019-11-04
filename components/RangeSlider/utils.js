const mountMarksByArray = (values, labelFunction) =>
  values.map(value => ({
    value,
    label: labelFunction ? labelFunction(value) : value,
  }));

export default {
  mountMarksByArray,
};
