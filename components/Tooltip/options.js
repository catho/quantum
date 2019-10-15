const ARROW_SIZE = 6;
const PERCENTAGE_Y = 100;
const PERCENTAGE_X = 50;
const BOX_MARGIN = 6;

const upDownBorders = `
  border-left: ${ARROW_SIZE}px solid transparent;
  border-right: ${ARROW_SIZE}px solid transparent;
  left: 50%;
  transform: translateX(-50%);
`;

const sideBorders = `
  border-top: ${ARROW_SIZE}px solid transparent;
  border-bottom: ${ARROW_SIZE}px solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;

const placementConfig = {
  arrowPosition: {
    top: `
      ${upDownBorders}
      border-top: ${ARROW_SIZE}px solid;
      border-top-color: inherit;
      bottom: -${ARROW_SIZE - 1}px;
    `,
    right: `
    ${sideBorders}
    border-right: ${ARROW_SIZE}px solid;
    border-right-color: inherit;
    left: -${ARROW_SIZE - 1}px;
  `,
    left: `
      ${sideBorders}
      border-left: ${ARROW_SIZE}px solid;
      border-left-color: inherit;
      right: -${ARROW_SIZE - 1}px;
    `,
    bottom: `
      ${upDownBorders}
      border-bottom: ${ARROW_SIZE}px solid;
      border-bottom-color: inherit;
      top: -${ARROW_SIZE - 1}px;
    `,
  },
  tipPosition: {
    top: `
      left: ${PERCENTAGE_X}%;
      bottom: calc(${PERCENTAGE_Y}% + ${ARROW_SIZE + BOX_MARGIN}px);
      transform: translateX(-${PERCENTAGE_X}%);
    `,
    right: `
      left: calc(${PERCENTAGE_Y}% + ${ARROW_SIZE + BOX_MARGIN}px);
      top: ${PERCENTAGE_X}%;
      transform: translateY(-${PERCENTAGE_X}%);
  `,
    left: `
      right: calc(${PERCENTAGE_Y}% + ${ARROW_SIZE + BOX_MARGIN}px);
      top: ${PERCENTAGE_X}%;
      transform: translateY(-${PERCENTAGE_X}%);
    `,
    bottom: `
      left: ${PERCENTAGE_X}%;
      top: calc(${PERCENTAGE_Y}% + ${ARROW_SIZE + BOX_MARGIN}px);
      transform: translateX(-${PERCENTAGE_X}%);
    `,
  },
};

export default placementConfig;
