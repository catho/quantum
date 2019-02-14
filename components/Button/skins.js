import Colors from '../Colors';
import DefaultButton from './models/DefaultButton';

const skins = {
  primary: new DefaultButton({
    unselected: Colors.BLUE['500'],
    selected: Colors.COBALT['500'],
    focused: Colors.BLUE['500'],
    focusedShadow: '0 2px 6px 0 rgba(19, 85, 208, 0.5);',
    disabled: Colors.BLACK['400'],
    // unselectedHover: Colors.COBALT['500'],
    selectedBorder: Colors.COBALT['500'],
  }),
  secondary: new DefaultButton({
    unselected: Colors.WHITE,
    unselectedTextColor: Colors.BLUE['500'],
    unselectedBorder: Colors.BLUE['500'],
    selected: Colors.BLUE['200'],
    selectedBorder: Colors.BLUE['500'],
    disabled: Colors.SHADOW['40'],
    disabledBorder: Colors.BLACK['400'],
    disabledTextColor: Colors.BLACK['400'],
    focused: Colors.WHITE,
    focusedBorder: Colors.BLUE['500'],
    focusedShadow: '0 2px 4px 0 rgba(19, 85, 208, 0.5);',
    // unselectedHover: Colors.BLUE['200'],
  }),
  action: new DefaultButton({
    unselected: Colors.PINK['500'],
    selected: Colors.PINK['900'],
    selectedBorder: Colors.PINK['900'],
    disabled: Colors.PINK['500'],
    focused: Colors.PINK['500'],
    focusedShadow: `0 2px 6px 0 ${Colors.PINK['500']};`,
    // unselectedHover: Colors.PINK['900'],
  }),
  link: new DefaultButton({
    unselected: 'transparent',
    unselectedTextColor: Colors.BLUE['500'],
    unselectedShadow: 'none',
    disabled: 'transparent',
    focused: 'transparent',
    decoration: 'underline',
    borderRadius: 'unset',
    // unselectedHover: 'transperent',
  }),
};

export default ({ skin }) => skins[skin] || skins.primary;
