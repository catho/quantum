import Colors from '../Colors/deprecated';
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
};

export default ({ skin }) => skins[skin] || skins.primary;
