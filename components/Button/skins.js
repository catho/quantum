import Colors from '../Colors';
import theme from '../../theme';

class ButtonColor {
  constructor({
    unselected,
    unselectedBorder = unselected,
    unselectedTextColor,
    unselectedFontWeight,
    selected,
    selectedBorder = selected,
    selectedTextColor,
    selectedFontWeight,
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

const skins = {
  secondary: {
    backgroundColor: Colors.PRIMARY['500'],
    textColor: Colors.WHITE,
  },
  hollow: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY['500'],
    textColor: Colors.PRIMARY['500'],
  },
  light: {
    backgroundColor: Colors.WHITE,
    textColor: Colors.PRIMARY['500'],
  },
  link: {
    backgroundColor: Colors.WHITE,
    textColor: Colors.PRIMARY['500'],
  },
  default: new ButtonColor({
    unselected: Colors.SECONDARY['500'],
    unselectedTextColor: Colors.WHITE,
    unselectedFontWeight: 'bold',
    selected: Colors.SECONDARY['600'],
    selectedTextColor: Colors.WHITE,
    selectedFontWeight: 'bold',
    disabled: Colors.SECONDARY['200'],
    disabledTextColor: Colors.WHITE,
    disabledFontWeight: 'bold',
  }),
};


export default ({ skin }) => skins[skin] || skins.default;
