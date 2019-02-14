import theme from '../../shared/theme';

class ButtonColor {
  constructor({
    // Unselected
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor,
    unselectedShadow,
    // Selected
    selected,
    selectedBorder = selected,
    selectedTextColor,
    selectedShadow,
    // Disabled
    disabled,
    disabledBorder = disabled,
    disabledTextColor,
    disabledShadow = unselectedShadow,
    // Focused
    focused,
    focusedBorder = focused,
    focusedTextColor,
    focusedShadow,
    // General
    decoration = 'none',
    borderRadius = theme.sizes.radius,
  }) {
    // Unselected
    this._unselected = unselected;
    this._unselectedBorder = unselectedBorder;
    this._unselectedTextColor = unselectedTextColor;
    this._unselectedShadow = unselectedShadow;
    // Selected
    this._selected = selected;
    this._selectedBorder = selectedBorder;
    this._selectedTextColor = selectedTextColor;
    this._selectedShadow = selectedShadow;
    // Disabled
    this._disabled = disabled;
    this._disabledBorder = disabledBorder;
    this._disabledTextColor = disabledTextColor;
    this._disabledShadow = disabledShadow;
    // Focused
    this._focused = focused;
    this._focusedBorder = focusedBorder;
    this._focusedTextColor = focusedTextColor;
    this._focusedShadow = focusedShadow;
    // Misc
    this._decoration = decoration;
    this._borderRadius = borderRadius;
  }

  get unselected() {
    return {
      background: this._unselected,
      border: this._unselectedBorder,
      color: this._unselectedTextColor,
      shadow: this._unselectedShadow,
    };
  }

  get selected() {
    return {
      background: this._selected,
      border: this._selectedBorder,
      color: this._selectedTextColor,
      shadow: this._selectedShadow,
    };
  }

  get disabled() {
    return {
      background: this._disabled,
      border: this._disabledBorder,
      color: this._disabledTextColor,
      shadow: this._disabledShadow,
    };
  }

  get focused() {
    return {
      background: this._focused,
      border: this._focusedBorder,
      color: this._focusedTextColor,
      shadow: this._focusedShadow,
    };
  }

  get decoration() {
    return this._decoration;
  }

  get borderRadius() {
    return this._borderRadius;
  }
}

export default ButtonColor;
