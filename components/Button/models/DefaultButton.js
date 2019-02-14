import Colors from '../../Colors';
import ButtonColor from './ButtonColor';

class DefaultButton extends ButtonColor {
  constructor({
    // Unselected
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor = Colors.WHITE,
    unselectedShadow = `0 2px 4px 0 ${Colors.BLACK['200']};`,
    // Selected
    selected,
    selectedBorder,
    selectedTextColor = unselectedTextColor,
    selectedShadow = `0 2px 4px 0 ${Colors.BLACK['700']};`,
    // Disabled
    disabled,
    disabledBorder,
    disabledTextColor = unselectedTextColor,
    disabledShadow = unselectedShadow,
    // Focused
    focused,
    focusedBorder,
    focusedTextColor = unselectedTextColor,
    focusedShadow = unselectedShadow,
    // Hovered
    hovered,
    hoveredBorder,
    hoveredTextColor = unselectedTextColor,
    hoveredShadow = unselectedShadow,
    // Misc
    decoration,
    borderRadius,
  }) {
    super({
      // Unselected
      unselected,
      unselectedBorder,
      unselectedTextColor,
      unselectedShadow,
      // Selected
      selected,
      selectedBorder,
      selectedTextColor,
      selectedShadow,
      // Disabled
      disabled,
      disabledBorder,
      disabledTextColor,
      disabledShadow,
      // Focused
      focused,
      focusedBorder,
      focusedTextColor,
      focusedShadow,
      // Hovered
      hovered,
      hoveredBorder,
      hoveredTextColor,
      hoveredShadow,
      // Misc
      decoration,
      borderRadius,
    });
  }
}

export default DefaultButton;
