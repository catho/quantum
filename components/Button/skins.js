import Colors from '../Colors';
import DefaultButton from './models/DefaultButton';

const skins = {
  primary: new DefaultButton({
    unselected: Colors.PRIMARY['500'],
    selected: Colors.PRIMARY['600'],
    disabled: Colors.PRIMARY['200'],
  }),
  secondary: new DefaultButton({
    unselected: Colors.SECONDARY['500'],
    selected: Colors.SECONDARY['600'],
    disabled: Colors.SECONDARY['200'],
  }),
  action: new DefaultButton({
    unselected: Colors.ACTION['500'],
    selected: Colors.ACTION['600'],
    disabled: Colors.ACTION['200'],
  }),
  cancel: new DefaultButton({
    unselected: Colors.WHITE,
    unselectedBorder: Colors.PRIMARY['300'],
    unselectedTextColor: Colors.PRIMARY['300'],
    selected: Colors.WHITE,
    selectedBorder: Colors.PRIMARY['500'],
    selectedTextColor: Colors.PRIMARY['500'],
    disabled: Colors.SECONDARY['50'],
  }),
  modal: new DefaultButton({
    unselected: Colors.WHITE,
    unselectedTextColor: Colors.PRIMARY['500'],
    selected: Colors.SECONDARY['50'],
    disabled: Colors.WHITE,
    disabledTextColor: Colors.PRIMARY['300'],
    shadow: false,
  }),
};

export default ({ skin }) => skins[skin] || skins.primary;
