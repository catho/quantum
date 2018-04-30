import Colors from '../Colors';
import DefaultButton from './models/DefaultButton';

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
