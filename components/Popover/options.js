const popoverPosition = ({
  popoverWrapperTopValue,
  popoverContentWidth,
  popoverContentHeight,
  triggerLeftValue,
  triggerWidthValue,
  triggerHeightValue,
}) => ({
  top: {
    left:
      triggerLeftValue -
      popoverContentWidth +
      triggerWidthValue / 2 +
      popoverContentWidth / 2,
    top: popoverWrapperTopValue - popoverContentHeight - 15,
  },
  right: {
    left: triggerLeftValue + triggerWidthValue + 15,
    top: popoverWrapperTopValue + triggerHeightValue / 2,
  },
  bottom: {
    left:
      triggerLeftValue -
      popoverContentWidth +
      triggerWidthValue / 2 +
      popoverContentWidth / 2,
    top: popoverWrapperTopValue + triggerHeightValue + 15,
  },
  left: {
    left: triggerLeftValue - popoverContentWidth - 15,
    top: popoverWrapperTopValue + triggerHeightValue / 2,
  },
});

export default popoverPosition;
