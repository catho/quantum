import Colors from '../../Colors';
import ButtonColor from './ButtonColor';

class DefaultButton extends ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor = Colors.WHITE,
    selected,
    selectedBorder = selected,
    selectedTextColor = unselectedTextColor,
    disabled,
    disabledBorder = disabled,
    disabledTextColor = unselectedTextColor,
  }) {
    super({
      unselected,
      unselectedBorder,
      unselectedTextColor,
      selected,
      selectedBorder,
      selectedTextColor,
      disabled,
      disabledBorder,
      disabledTextColor,
    });
  }
}

export default DefaultButton;
