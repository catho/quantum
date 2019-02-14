import Colors from '../../Colors';
import ButtonColor from './ButtonColor';

class DefaultButton extends ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor = Colors.WHITE,
    // unselectedHover,
    unselectedShadow,
    selected,
    selectedBorder,
    selectedTextColor = unselectedTextColor,
    selectedShadow = unselectedShadow,
    disabled,
    disabledBorder,
    disabledTextColor = unselectedTextColor,
    disabledShadow = unselectedShadow,
    focused,
    focusedBorder,
    focusedTextColor = unselectedTextColor,
    focusedShadow = unselectedShadow,
    decoration,
    borderRadius,
  }) {
    super({
      unselected,
      unselectedBorder,
      unselectedTextColor,
      // unselectedHover,
      unselectedShadow,
      selected,
      selectedBorder,
      selectedTextColor,
      selectedShadow,
      disabled,
      disabledBorder,
      disabledTextColor,
      disabledShadow,
      focused,
      focusedBorder,
      focusedTextColor,
      focusedShadow,
      decoration,
      borderRadius,
    });
  }
}

export default DefaultButton;
