import Colors from '../Colors';

const arrowSize = 5;
const upDownBorders = `
  border-left: ${arrowSize}px solid transparent;
  border-right: ${arrowSize}px solid transparent;
  left: 50%;
  transform: translateX(-50%);
`;

const sideBorders = `
  border-top: ${arrowSize}px solid transparent;
  border-bottom: ${arrowSize}px solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;

const placement = {
  arrowPosition: {
    bottom: `
      ${upDownBorders}
      border-bottom: ${arrowSize}px solid;
      border-bottom-color: inherit;
      top: -${arrowSize - 1}px;
    `,
    top: `
      ${upDownBorders}
      border-top: ${arrowSize}px solid;
      border-top-color: inherit;
      bottom: -${arrowSize - 1}px;
    `,
    left: `
      ${sideBorders}
      border-left: ${arrowSize}px solid;
      border-left-color: inherit;
      right: -${arrowSize - 1}px;
    `,
    right: `
      ${sideBorders}
      border-right: ${arrowSize}px solid;
      border-right-color: inherit;
      left: -${arrowSize - 1}px;
    `,
  },

  tipPosition: ({ place, height, width }) => {
    const position = {
      top: `top: -${height + 5}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      right: `right: -${width + 15}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
      bottom: `bottom: -${height + 10}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      left: `left: -${width + 15}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
    };

    return position[place] || position.top;
  },
};

const skins = {
  info: Colors.SECONDARY['500'],
  danger: Colors.DANGER['500'],
  success: Colors.ACTION['400'],
  warning: Colors.WARMING['400'],
};

export {
  skins,
  placement,
};
