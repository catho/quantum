import Colors from '../Colors';

const ARROW_SIZE = '16px';
const SIDE_POSITION_X = -8;
const CENTER_POSITION = '50%';

const getColorBySkin = skin => {
  const indexColor = skin.toUpperCase();
  return skin === 'default' ? Colors.WHITE : Colors[indexColor][200];
};

const placementPosition = {
  top: `
    content: '▼';
    left: ${CENTER_POSITION};
    text-shadow: 0px 4px 4px ${Colors.SHADOW[50]};
    bottom: 0;
    transform: translateX(-${CENTER_POSITION});
  `,
  bottom: `
    top: -4px;
    content: '▲';
    left: ${CENTER_POSITION};
    text-shadow: 0px -3px 4px ${Colors.SHADOW[50]};
    transform: translateX(-${CENTER_POSITION});
  `,
  right: `
    bottom: ${CENTER_POSITION};
    content: '◀';
    left: ${SIDE_POSITION_X}px;
    text-shadow: -3px 1px 4px ${Colors.SHADOW[50]};
  `,
  left: `
    bottom: ${CENTER_POSITION};
    content: '▶';
    right: ${SIDE_POSITION_X}px;
    text-shadow: 3px 1px 4px ${Colors.SHADOW[50]};
  `,
};

const getArrow = (placement, skin) => `
  color: ${getColorBySkin(skin)}
  font-size: ${ARROW_SIZE};
  position: absolute;

  ${placementPosition[placement]}
`;

export default getArrow;
