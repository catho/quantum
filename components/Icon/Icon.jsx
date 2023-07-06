import PropTypes from 'prop-types';

import Accessible from '@mui/icons-material/Accessible';
import AccessibleForward from '@mui/icons-material/AccessibleForward';
import AccessTime from '@mui/icons-material/AccessTime';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Add from '@mui/icons-material/Add';
import AddCircle from '@mui/icons-material/AddCircle';
import Apps from '@mui/icons-material/Apps';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Assessment from '@mui/icons-material/Assessment';
import Assignment from '@mui/icons-material/Assignment';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Block from '@mui/icons-material/Block';
import Cached from '@mui/icons-material/Cached';
import CameraAlt from '@mui/icons-material/CameraAlt';
import Chat from '@mui/icons-material/Chat';
import Check from '@mui/icons-material/Check';
import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Clear from '@mui/icons-material/Clear';
import Close from '@mui/icons-material/Close';
import Collections from '@mui/icons-material/Collections';
import Contacts from '@mui/icons-material/Contacts';
import ContactPhone from '@mui/icons-material/ContactPhone';
import CreditCard from '@mui/icons-material/CreditCard';
import DateRange from '@mui/icons-material/DateRange';
import Delete from '@mui/icons-material/Delete';
import Done from '@mui/icons-material/Done';
import Edit from '@mui/icons-material/Edit';
import EmojiPeople from '@mui/icons-material/EmojiPeople';
import Equalizer from '@mui/icons-material/Equalizer';
import Error from '@mui/icons-material/Error';
import EventAvailable from '@mui/icons-material/EventAvailable';
import ExitToApp from '@mui/icons-material/ExitToApp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FilterList from '@mui/icons-material/FilterList';
import Folder from '@mui/icons-material/Folder';
import Group from '@mui/icons-material/Group';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Launch from '@mui/icons-material/Launch';
import LocationCity from '@mui/icons-material/LocationCity';
import Lock from '@mui/icons-material/Lock';
import Markunread from '@mui/icons-material/Markunread';
import Menu from '@mui/icons-material/Menu';
import MenuBook from '@mui/icons-material/MenuBook';
import Notifications from '@mui/icons-material/Notifications';
import Payment from '@mui/icons-material/Payment';
import PermDeviceInformation from '@mui/icons-material/PermDeviceInformation';
import Person from '@mui/icons-material/Person';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Refresh from '@mui/icons-material/Refresh';
import Receipt from '@mui/icons-material/Receipt';
import Search from '@mui/icons-material/Search';
import Security from '@mui/icons-material/Security';
import Send from '@mui/icons-material/Send';
import School from '@mui/icons-material/School';
import Share from '@mui/icons-material/Share';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import StarHalf from '@mui/icons-material/StarHalf';
import SwapVert from '@mui/icons-material/SwapVert';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Tune from '@mui/icons-material/Tune';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Warning from '@mui/icons-material/Warning';
import WatchLater from '@mui/icons-material/WatchLater';
import Whatshot from '@mui/icons-material/Whatshot';
import Work from '@mui/icons-material/Work';
import Help from '@mui/icons-material/Help';
import FlashOn from '@mui/icons-material/FlashOn';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StarsIcon from '@mui/icons-material/Stars';

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
    auto_graph: AutoGraphIcon,
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
    favorite: Favorite,
    favorite_border: FavoriteBorder,
    filter_list: FilterList,
    flash_on: FlashOn,
    folder: Folder,
    group: Group,
    group_add: GroupAddIcon,
    home: Home,
    help: Help,
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
    stars: StarsIcon,
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
