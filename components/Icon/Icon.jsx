import React from 'react';
import PropTypes from 'prop-types';
import Accessible from '@material-ui/icons/Accessible';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import AccessTime from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Add from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Assessment from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Block from '@material-ui/icons/Block';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Check from '@material-ui/icons/Check';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import CollectionsIcon from '@material-ui/icons/Collections';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactPhone from '@material-ui/icons/ContactPhone';
import CreditCard from '@material-ui/icons/CreditCard';
import DateRange from '@material-ui/icons/DateRange';
import DeleteIcon from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Error from '@material-ui/icons/Error';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FilterListIcon from '@material-ui/icons/FilterList';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Lock from '@material-ui/icons/Lock';
import Markunread from '@material-ui/icons/Markunread';
import Menu from '@material-ui/icons/Menu';
import MenuBook from '@material-ui/icons/MenuBook';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Payment from '@material-ui/icons/Payment';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import Person from '@material-ui/icons/Person';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Receipt from '@material-ui/icons/Receipt';
import Search from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import SchoolIcon from '@material-ui/icons/School';
import Share from '@material-ui/icons/Share';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import SwapVert from '@material-ui/icons/SwapVert';
import TuneIcon from '@material-ui/icons/Tune';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import { theme } from '../shared';
import icons from '../shared/icons';

const { baseFontSize } = theme;

const sizes = {
  small: baseFontSize, // 16
  medium: baseFontSize * 1.5, // 24
  large: baseFontSize * 2, // 32
};

const Icon = ({ name, skin, size, ...props }) => {
  const components = {
    access_time: AccessTime,
    accessible_forward: AccessibleForward,
    accessible: Accessible,
    add: Add,
    add_circle: AddCircleIcon,
    apps: AppsIcon,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    assessment: Assessment,
    assignment: AssignmentIcon,
    attach_money: AttachMoneyIcon,
    block: Block,
    camera: CameraAltIcon,
    check_box_outline_blank: CheckBoxOutlineBlank,
    check_box: CheckBox,
    check_circle: CheckCircle,
    check: Check,
    clear: Clear,
    close: Close,
    collections: CollectionsIcon,
    contacts: ContactsIcon,
    contact_phone: ContactPhone,
    credit_card: CreditCard,
    date_range: DateRange,
    delete: DeleteIcon,
    done: Done,
    edit: EditIcon,
    emoji_people: EmojiPeople,
    error: Error,
    event_available: EventAvailableIcon,
    exit_to_app: ExitToApp,
    expand_less: ExpandLess,
    expand_more: ExpandMore,
    favorite_border: FavoriteBorder,
    filter_list: FilterListIcon,
    home: Home,
    info: Info,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    lock: Lock,
    markunread: Markunread,
    menu_book: MenuBook,
    menu: Menu,
    notification: NotificationsIcon,
    payment: Payment,
    perm_device_information: PermDeviceInformation,
    person: Person,
    person_circle: AccountCircleIcon,
    phone_android: PhoneAndroidIcon,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    receipt: Receipt,
    search: Search,
    send: SendIcon,
    school: SchoolIcon,
    share: Share,
    star_border: StarBorder,
    star_half: StarHalf,
    star: Star,
    swap_vert: SwapVert,
    tune: TuneIcon,
    verified_user: VerifiedUser,
    visibility_off: VisibilityOff,
    visibility: Visibility,
    warning: Warning,
    whatshot: WhatshotIcon,
  };

  if (!components[name]) return <span>{name}</span>;

  const SelectedIcon = components[name];

  return (
    <SelectedIcon
      {...props}
      style={{ color: skin, fontSize: sizes[size], maxWidth: sizes[size] }}
      data-qtm-preloader="icon"
    >
      {name}
    </SelectedIcon>
  );
};

Icon.defaultProps = {
  style: {},
  skin: '',
  size: 'medium',
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
