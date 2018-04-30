import Colors from '../Colors';
import theme from '../../theme';

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

const skins = {
  default: new DefaultButton({
    unselected: Colors.SECONDARY['500'],
    selected: Colors.SECONDARY['600'],
    disabled: Colors.SECONDARY['200'],
  }),
  primary: new DefaultButton({
    unselected: Colors.SECONDARY['500'],
    selected: Colors.SECONDARY['600'],
    disabled: Colors.SECONDARY['200'],
  }),
  secondary: new DefaultButton({
    unselected: Colors.GREY['500'],
    selected: Colors.GREY['600'],
    disabled: Colors.GREY['200'],
  }),
  action: new DefaultButton({
    unselected: Colors.ACTION['500'],
    selected: Colors.ACTION['600'],
    disabled: Colors.ACTION['200'],
  }),
  cancel: new DefaultButton({
    unselected: Colors.WHITE,
    unselectedBorder: Colors.SECONDARY['400'],
    unselectedTextColor: Colors.SECONDARY['400'],
    selected: Colors.WHITE,
    selectedBorder: Colors.SECONDARY['600'],
    selectedTextColor: Colors.SECONDARY['600'],
    disabled: Colors.GREY['50'],
  }),
  modal: new DefaultButton({
    unselected: Colors.WHITE,
    unselectedTextColor: Colors.SECONDARY['400'],
    selected: Colors.GREY['50'],
    disabled: Colors.WHITE,
    disabledTextColor: Colors.SECONDARY['200'],
  }),
};


export default ({ skin }) => skins[skin] || skins.default;
