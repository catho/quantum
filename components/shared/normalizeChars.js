const normalizeChars = value =>
  value.replace(
    /([àáâãäå])|([çčć])|([èéêë])|([ìíîï])|([òóôõöø])|([ùúûü])|([-_])|(['])/g,
    (str, a, c, e, i, o, u, convertToSpace, removeFromString) => {
      if (a) return 'a';
      if (c) return 'c';
      if (e) return 'e';
      if (i) return 'i';
      if (o) return 'o';
      if (u) return 'u';
      if (convertToSpace) return ' ';
      if (removeFromString) return '';
      return '';
    },
  );

export default normalizeChars;
