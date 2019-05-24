const hexToRgba = (hex, opacity = 1) => {
  const _h = hex.replace('#', '');

  const _shortened = hex.length < 5;
  const _step = _shortened ? 1 : 2;
  const _bIndex = _shortened ? 2 : 4;

  const _p = from =>
    parseInt(_h.slice(from, from + _step).repeat(_shortened ? 2 : 1), 16);

  return `rgba(${_p(0)},${_p(_step)},${_p(_bIndex)},${opacity})`;
};

export default hexToRgba;
