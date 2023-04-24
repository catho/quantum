export default function*(prefix = '') {
  let _counter = -1;
  while (true) yield `${prefix}${(_counter += 1)}`;
}
