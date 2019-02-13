import Colors from '../../Colors';
import ButtonColor from './ButtonColor';

class DefaultButton extends ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor = Colors.WHITE,
    unselectedHover,
    selected,
    selectedBorder = selected,
    selectedTextColor = unselectedTextColor,
    disabled,
    disabledBorder = disabled,
    disabledTextColor = unselectedTextColor,
    shadow = true,
  }) {
    super({
      unselected,
      unselectedBorder,
      unselectedTextColor,
      unselectedHover,
      selected,
      selectedBorder,
      selectedTextColor,
      disabled,
      disabledBorder,
      disabledTextColor,
      shadow,
    });
  }
}

export default DefaultButton;
