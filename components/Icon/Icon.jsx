import React from 'react';
import PropTypes from 'prop-types';
// import MaterialIcon from '@material-ui/core/Icon';
import icons from '../shared/icons';
import Close from '@material-ui/icons/Close';
import Clear from '@material-ui/icons/Clear';
import Search from '@material-ui/icons/Search';
import Info from '@material-ui/icons/Info';
import Error from '@material-ui/icons/Error';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Done from '@material-ui/icons/Done';
import Share from '@material-ui/icons/Share';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CreditCard from '@material-ui/icons/CreditCard';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';
import StarBorder from '@material-ui/icons/StarBorder';
import Warning from '@material-ui/icons/Warning';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Add from '@material-ui/icons/Add';
import Lock from '@material-ui/icons/Lock';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Menu from '@material-ui/icons/Menu';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import DateRange from '@material-ui/icons/DateRange';
import Markunread from '@material-ui/icons/Markunread';
import Person from '@material-ui/icons/Person';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import ContactPhone from '@material-ui/icons/ContactPhone';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Payment from '@material-ui/icons/Payment';
import Assessment from '@material-ui/icons/Assessment';
import Receipt from '@material-ui/icons/Receipt';
// import MenuBook from '@material-ui/icons/MenuBook';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccessibleForward from '@material-ui/icons/AccessibleForward';

const Icon = ({ name, skin, ...props }) => {
  console.log('name', name);

  const components = {
    close: Close,
    clear: Clear,
    search: Search,
    info: Info,
    error: Error,
    visibility_off: VisibilityOff,
    visibility: Visibility,
    check_box: CheckBox,
    check_box_outline_blank: CheckBoxOutlineBlank,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    done: Done,
    share: Share,
    favorite_border: FavoriteBorder,
    credit_card: CreditCard,
    star: Star,
    star_half: StarHalf,
    star_border: StarBorder,
    warning: Warning,
    check_circle: CheckCircle,
    add: Add,
    lock: Lock,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    menu: Menu,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    date_range: DateRange,
    markunread: Markunread,
    person: Person,
    lock: Lock,
    perm_device_information: PermDeviceInformation,
    emoji_people: EmojiPeople,
    contact_phone: ContactPhone,
    verified_user: VerifiedUser,
    payment: Payment,
    verified_user: VerifiedUser,
    assessment: Assessment,
    receipt: Receipt,
    // menu_book: MenuBook,
    exit_to_app: ExitToApp,
    accessible_forward: AccessibleForward,
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
