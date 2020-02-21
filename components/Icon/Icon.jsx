import React from 'react';
import PropTypes from 'prop-types';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import Add from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Assessment from '@material-ui/icons/Assessment';
import Check from '@material-ui/icons/Check';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import ContactPhone from '@material-ui/icons/ContactPhone';
import CreditCard from '@material-ui/icons/CreditCard';
import DateRange from '@material-ui/icons/DateRange';
import Done from '@material-ui/icons/Done';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Error from '@material-ui/icons/Error';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExitToApp from '@material-ui/icons/ExitToApp';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Info from '@material-ui/icons/Info';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Lock from '@material-ui/icons/Lock';
import Markunread from '@material-ui/icons/Markunread';
import Menu from '@material-ui/icons/Menu';
import MenuBook from '@material-ui/icons/MenuBook';
import Payment from '@material-ui/icons/Payment';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import Person from '@material-ui/icons/Person';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Receipt from '@material-ui/icons/Receipt';
import Search from '@material-ui/icons/Search';
import Share from '@material-ui/icons/Share';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';

import icons from '../shared/icons';

const Icon = ({ name, skin, ...props }) => {
  const components = {
    accessible_forward: AccessibleForward,
    add: Add,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    assessment: Assessment,
    check: Check,
    check_box: CheckBox,
    check_box_outline_blank: CheckBoxOutlineBlank,
    check_circle: CheckCircle,
    clear: Clear,
    close: Close,
    contact_phone: ContactPhone,
    credit_card: CreditCard,
    date_range: DateRange,
    done: Done,
    emoji_people: EmojiPeople,
    error: Error,
    expand_less: ExpandLess,
    expand_more: ExpandMore,
    exit_to_app: ExitToApp,
    favorite_border: FavoriteBorder,
    info: Info,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    lock: Lock,
    markunread: Markunread,
    menu: Menu,
    menu_book: MenuBook,
    payment: Payment,
    perm_device_information: PermDeviceInformation,
    person: Person,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    receipt: Receipt,
    search: Search,
    share: Share,
    star_border: StarBorder,
    star_half: StarHalf,
    star: Star,
    verified_user: VerifiedUser,
    visibility_off: VisibilityOff,
    visibility: Visibility,
    warning: Warning,
  };

  const SelectedIcon = components[name];

  return (
    <SelectedIcon {...props} style={{ color: skin }}>
      {name}
    </SelectedIcon>
  );
};

Icon.defaultProps = {
  style: {},
  skin: '',
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
};

export default Icon;
