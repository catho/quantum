import theme from '../../shared/theme';

class ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor,
    unselectedHover,
    unselectedFontWeight = theme.font.weight,
    selected,
    selectedBorder = selected,
    selectedTextColor,
    selectedFontWeight = theme.font.weight,
    disabled,
    disabledBorder = disabled,
    disabledTextColor,
    disabledFontWeight = theme.font.weight,
    shadow,
  }) {
    this._unselected = unselected;
    this._unselectedBorder = unselectedBorder;
    this._unselectedTextColor = unselectedTextColor;
    this._unselectedHover = unselectedHover;
    this._unselectedFontWeight = unselectedFontWeight;
    this._selected = selected;
    this._selectedBorder = selectedBorder;
    this._selectedTextColor = selectedTextColor;
    this._selectedFontWeight = selectedFontWeight;
    this._disabled = disabled;
    this._disabledBorder = disabledBorder;
    this._disabledTextColor = disabledTextColor;
    this._disabledFontWeight = disabledFontWeight;
    this._shadow = shadow;
  }

  get unselected() {
    return {
      background: this._unselected,
      border: this._unselectedBorder,
      color: this._unselectedTextColor,
      fontWeight: this._unselectedFontWeight,
      hover: this._unselectedHover,
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

  get shadow() {
    return this._shadow;
  }

  get link() {
    return {
      color: this._unselectedTextColor,
    };
  }
}

export default ButtonColor;
