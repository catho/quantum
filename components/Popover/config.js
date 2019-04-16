import Colors from '../Colors';

const ARROW_SIZE = '16px';
const ARROW_POSITION_Y = '101%';
const SIDE_POSITION_X = -10;
const CENTER_POSITION = '50%';

const getColorBySkin = skin => {
  const indexColor = skin.toUpperCase();
  return skin === 'default' ? Colors.WHITE : Colors[indexColor][200];
};

const getArrow = (placement, skin) => {
  let placementPosition = '';
  const placementPositionTop = `
  content: '▼';
  left: ${CENTER_POSITION};
  text-shadow: 0px 4px 4px ${Colors.SHADOW[50]};
  top: ${ARROW_POSITION_Y};
  transform: translateX(-${CENTER_POSITION});`;

  switch (placement) {
    case 'top':
      placementPosition = placementPositionTop;
      break;
    case 'bottom':
      placementPosition = `
      bottom: ${ARROW_POSITION_Y};
      content: '▲';
      left: ${CENTER_POSITION};
      text-shadow: 0px -3px 4px ${Colors.SHADOW[50]};
      transform: translateX(-${CENTER_POSITION});`;
      break;
    case 'right':
      placementPosition = `
      bottom: ${CENTER_POSITION};
      content: '◀';
      left: ${SIDE_POSITION_X}px;
      text-shadow: -3px 1px 4px ${Colors.SHADOW[50]};`;
      break;
    case 'left':
      placementPosition = `
      bottom: ${CENTER_POSITION};
      content: '▶';
      right: ${SIDE_POSITION_X}px;
      text-shadow: 3px 1px 4px ${Colors.SHADOW[50]};`;
      break;
    default:
      placementPosition = placementPositionTop;
  }

  return `
  color: ${getColorBySkin(skin)}
  font-size: ${ARROW_SIZE};
  position: absolute;
  
  ${placementPosition}
  `;
};

export default getArrow;
