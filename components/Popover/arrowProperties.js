import { hexToRgba } from '../shared';

const ARROW_SIZE = '16px';
const SIDE_POSITION_X = -8;
const CENTER_POSITION = '50%';

const placementPosition = ({ neutral: { 700: shadowColor } }) => ({
  top: `
    content: '▼';
    left: ${CENTER_POSITION};
    text-shadow: 0px 8px 4px ${hexToRgba(shadowColor, 0.2)};
    bottom: 0;
    transform: translateX(-${CENTER_POSITION});
  `,
  bottom: `
    top: -4px;
    content: '▲';
    left: ${CENTER_POSITION};
    text-shadow: 0px -3px 4px ${hexToRgba(shadowColor, 0.2)};
    transform: translateX(-${CENTER_POSITION});
  `,
  right: `
    bottom: ${CENTER_POSITION};
    content: '◀';
    left: ${SIDE_POSITION_X}px;
    text-shadow: -4px 1px 4px ${hexToRgba(shadowColor, 0.2)};
  `,
  left: `
    bottom: ${CENTER_POSITION};
    content: '▶';
    right: ${SIDE_POSITION_X}px;
    text-shadow: 4px 1px 4px ${hexToRgba(shadowColor, 0.2)};
  `,
});

const getArrow = ({
  placement,
  skin,
  theme: {
    components: {
      popover: {
        skins: {
          [skin]: { background, text },
        },
      },
    },
    colors,
  },
  inverted,
}) => ` color: ${inverted ? text : background}
  font-size: ${ARROW_SIZE};
  position: absolute;

  ${placementPosition(colors)[placement]}
`;

export default getArrow;
