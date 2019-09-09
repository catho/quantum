const CSSVariables = ({ theme: { gutter } }) => ({
  gutter: {
    xsmall: `${gutter * 2}px`,
    small: `${gutter * 3}px`,
    medium: `${gutter * 3}px`,
    large: `${gutter * 3}px`,
    xlarge: `${gutter * 3}px`,
  },
});

export default CSSVariables;
