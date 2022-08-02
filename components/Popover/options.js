const ARROW_SIZE = 15;

const getMidpointOfElements = (widthElementA, widthElementB) =>
  (widthElementA - widthElementB) / 2;

const popoverPosition = ({
  popoverContentWidth,
  popoverContentHeight,
  triggerWidthValue,
  triggerHeightValue,
}) => ({
  top: {
    left: getMidpointOfElements(triggerWidthValue, popoverContentWidth),
    top: -popoverContentHeight - ARROW_SIZE,
  },
  right: {
    left: triggerWidthValue + ARROW_SIZE,
    top: getMidpointOfElements(triggerHeightValue, popoverContentHeight),
  },
  bottom: {
    left: getMidpointOfElements(triggerWidthValue, popoverContentWidth),
    top: triggerHeightValue + ARROW_SIZE,
  },
  left: {
    left: -popoverContentWidth - ARROW_SIZE,
    top: getMidpointOfElements(triggerHeightValue, popoverContentHeight),
  },
});

export default popoverPosition;
