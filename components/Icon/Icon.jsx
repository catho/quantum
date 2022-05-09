import PropTypes from 'prop-types';

import Accessible from '@material-ui/icons/Accessible';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import AccessTime from '@material-ui/icons/AccessTime';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Add from '@material-ui/icons/Add';
import AddCircle from '@material-ui/icons/AddCircle';
import Apps from '@material-ui/icons/Apps';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Assessment from '@material-ui/icons/Assessment';
import Assignment from '@material-ui/icons/Assignment';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Block from '@material-ui/icons/Block';
import Cached from '@material-ui/icons/Cached';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Chat from '@material-ui/icons/Chat';
import Check from '@material-ui/icons/Check';
import CheckBox from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Clear from '@material-ui/icons/Clear';
import Close from '@material-ui/icons/Close';
import Collections from '@material-ui/icons/Collections';
import Contacts from '@material-ui/icons/Contacts';
import ContactPhone from '@material-ui/icons/ContactPhone';
import CreditCard from '@material-ui/icons/CreditCard';
import DateRange from '@material-ui/icons/DateRange';
import Delete from '@material-ui/icons/Delete';
import Done from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Equalizer from '@material-ui/icons/Equalizer';
import Error from '@material-ui/icons/Error';
import EventAvailable from '@material-ui/icons/EventAvailable';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FilterList from '@material-ui/icons/FilterList';
import Folder from '@material-ui/icons/Folder';
import Group from '@material-ui/icons/Group';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import Launch from '@material-ui/icons/Launch';
import LocationCity from '@material-ui/icons/LocationCity';
import Lock from '@material-ui/icons/Lock';
import Markunread from '@material-ui/icons/Markunread';
import Menu from '@material-ui/icons/Menu';
import MenuBook from '@material-ui/icons/MenuBook';
import Notifications from '@material-ui/icons/Notifications';
import Payment from '@material-ui/icons/Payment';
import PermDeviceInformation from '@material-ui/icons/PermDeviceInformation';
import Person from '@material-ui/icons/Person';
import PhoneAndroid from '@material-ui/icons/PhoneAndroid';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Refresh from '@material-ui/icons/Refresh';
import Receipt from '@material-ui/icons/Receipt';
import Search from '@material-ui/icons/Search';
import Security from '@material-ui/icons/Security';
import Send from '@material-ui/icons/Send';
import School from '@material-ui/icons/School';
import Share from '@material-ui/icons/Share';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import SwapVert from '@material-ui/icons/SwapVert';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Tune from '@material-ui/icons/Tune';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Warning from '@material-ui/icons/Warning';
import WatchLater from '@material-ui/icons/WatchLater';
import Whatshot from '@material-ui/icons/Whatshot';
import Work from '@material-ui/icons/Work';

import { theme } from '../shared';
import icons from '../shared/icons';

const { baseFontSize } = theme;

const sizes = {
  xsmall: baseFontSize * 0.5, // 8
  small: baseFontSize, // 16
  medium: baseFontSize * 1.5, // 24
  large: baseFontSize * 2, // 32
  xlarge: baseFontSize * 2.5, // 40
};

const Icon = ({ name, skin, size, ...props }) => {
  const components = {
    access_time: AccessTime,
    accessible_forward: AccessibleForward,
    accessible: Accessible,
    add: Add,
    wallet: AccountBalanceWallet,
    add_circle: AddCircle,
    apps: Apps,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    arrow_left: ArrowLeft,
    arrow_right: ArrowRight,
    assessment: Assessment,
    assignment: Assignment,
    assignment_ind: AssignmentInd,
    assignment_turned_in: AssignmentTurnedIn,
    attach_money: AttachMoney,
    block: Block,
    cached: Cached,
    camera: CameraAlt,
    chat: Chat,
    check_box_outline_blank: CheckBoxOutlineBlank,
    check_box: CheckBox,
    check_circle: CheckCircle,
    check: Check,
    clear: Clear,
    close: Close,
    collections: Collections,
    contacts: Contacts,
    contact_phone: ContactPhone,
    credit_card: CreditCard,
    date_range: DateRange,
    delete: Delete,
    done: Done,
    edit: Edit,
    emoji_people: EmojiPeople,
    equalizer: Equalizer,
    error: Error,
    event_available: EventAvailable,
    exit_to_app: ExitToApp,
    expand_less: ExpandLess,
    expand_more: ExpandMore,
    favorite_border: FavoriteBorder,
    filter_list: FilterList,
    folder: Folder,
    group: Group,
    home: Home,
    info: Info,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    launch: Launch,
    location_city: LocationCity,
    lock: Lock,
    markunread: Markunread,
    menu_book: MenuBook,
    menu: Menu,
    notification: Notifications,
    payment: Payment,
    perm_device_information: PermDeviceInformation,
    person: Person,
    person_circle: AccountCircle,
    phone_android: PhoneAndroid,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    refresh: Refresh,
    receipt: Receipt,
    search: Search,
    security: Security,
    send: Send,
    school: School,
    share: Share,
    star_border: StarBorder,
    star_half: StarHalf,
    star: Star,
    swap_vert: SwapVert,
    trending_up: TrendingUp,
    tune: Tune,
    verified_user: VerifiedUser,
    visibility_off: VisibilityOff,
    visibility: Visibility,
    warning: Warning,
    watch_later: WatchLater,
    whatshot: Whatshot,
    work: Work,
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
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
};

export default Icon;
