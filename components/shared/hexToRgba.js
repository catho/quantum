const hexToRgba = (hex, opacity = 1) => {
  const _h = hex.replace('#', '');

  const _shortened = _h.length === 3;
  const _step = _shortened ? 1 : 2;
  const _bIndex = _shortened ? 2 : 4;

  const _parse = from =>
    parseInt(_h.slice(from, from + _step).repeat(_shortened ? 2 : 1), 16);

  return `rgba(${_parse(0)},${_parse(_step)},${_parse(_bIndex)},${opacity})`;
};

export default hexToRgba;
