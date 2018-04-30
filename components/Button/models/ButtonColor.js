import theme from '../../../theme';

class ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor,
    unselectedFontWeight = theme.font.weight,
    selected,
    selectedBorder = selected,
    selectedTextColor,
    selectedFontWeight = theme.font.weight,
    disabled,
    disabledBorder = disabled,
    disabledTextColor,
    disabledFontWeight = theme.font.weight,
  }) {
    this._unselected = unselected;
    this._unselectedBorder = unselectedBorder;
    this._unselectedTextColor = unselectedTextColor;
    this._unselectedFontWeight = unselectedFontWeight;
    this._selected = selected;
    this._selectedBorder = selectedBorder;
    this._selectedTextColor = selectedTextColor;
    this._selectedFontWeight = selectedFontWeight;
    this._disabled = disabled;
    this._disabledBorder = disabledBorder;
    this._disabledTextColor = disabledTextColor;
    this._disabledFontWeight = disabledFontWeight;
  }

  get unselected() {
    return {
      background: this._unselected,
      border: this._unselectedBorder,
      color: this._unselectedTextColor,
      fontWeight: this._unselectedFontWeight,
    };
  }

  get selected() {
    return {
      background: this._selected,
      border: this._selectedBorder,
      color: this._selectedTextColor,
      fontWeight: this._selectedFontWeight,
    };
  }

  get disabled() {
    return {
      background: this._disabled,
      border: this._disabledBorder,
      color: this._disabledTextColor,
      fontWeight: this._disabledFontWeight,
    };
  }
}

export default ButtonColor;
