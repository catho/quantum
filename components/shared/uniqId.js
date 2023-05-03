export function createUniqId(prefix = '') {
  let counter = -1;

  return () => {
    counter += 1;

    return `${prefix}${counter}`;
  };
}
