import PropTypes from 'prop-types';

import AccessTime from '@mui/icons-material/AccessTime';
import Accessible from '@mui/icons-material/Accessible';
import AccessibleForward from '@mui/icons-material/AccessibleForward';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWallet';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Add from '@mui/icons-material/Add';
import AddAlarm from '@mui/icons-material/AddAlarm';
import AddCircle from '@mui/icons-material/AddCircle';
import Addchart from '@mui/icons-material/Addchart';
import Apps from '@mui/icons-material/Apps';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Assessment from '@mui/icons-material/Assessment';
import Assignment from '@mui/icons-material/Assignment';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoney from '@mui/icons-material/AttachMoney';
import AutoGraph from '@mui/icons-material/AutoGraph';
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
import ContactPhone from '@mui/icons-material/ContactPhone';
import ContactSupport from '@mui/icons-material/ContactSupport';
import Contacts from '@mui/icons-material/Contacts';
import Contrast from '@mui/icons-material/Contrast';
import CreditCard from '@mui/icons-material/CreditCard';
import DateRange from '@mui/icons-material/DateRange';
import Delete from '@mui/icons-material/Delete';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
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
import FlashOn from '@mui/icons-material/FlashOn';
import Folder from '@mui/icons-material/Folder';
import Group from '@mui/icons-material/Group';
import GroupAdd from '@mui/icons-material/GroupAdd';
import Help from '@mui/icons-material/Help';
import Home from '@mui/icons-material/Home';
import HomeWork from '@mui/icons-material/HomeWork';
import Info from '@mui/icons-material/Info';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Launch from '@mui/icons-material/Launch';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import LocationCity from '@mui/icons-material/LocationCity';
import Lock from '@mui/icons-material/Lock';
import LockOpen from '@mui/icons-material/LockOpen';
import LockOutlined from '@mui/icons-material/LockOutlined';
import Markunread from '@mui/icons-material/Markunread';
import Menu from '@mui/icons-material/Menu';
import MenuBook from '@mui/icons-material/MenuBook';
import MoreVert from '@mui/icons-material/MoreVert';
import Notifications from '@mui/icons-material/Notifications';
import PauseCircleOutline from '@mui/icons-material/PauseCircleOutline';
import Payment from '@mui/icons-material/Payment';
import PermDeviceInformation from '@mui/icons-material/PermDeviceInformation';
import Person from '@mui/icons-material/Person';
import PersonAdd from '@mui/icons-material/PersonAdd';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import Print from '@mui/icons-material/Print';
import RadioButtonChecked from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import Receipt from '@mui/icons-material/Receipt';
import Refresh from '@mui/icons-material/Refresh';
import Room from '@mui/icons-material/Room';
import School from '@mui/icons-material/School';
import Search from '@mui/icons-material/Search';
import Security from '@mui/icons-material/Security';
import Send from '@mui/icons-material/Send';
import Share from '@mui/icons-material/Share';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import StarHalf from '@mui/icons-material/StarHalf';
import StarRounded from '@mui/icons-material/StarRounded';
import Stars from '@mui/icons-material/Stars';
import SwapVert from '@mui/icons-material/SwapVert';
import ThumbDown from '@mui/icons-material/ThumbDown';
import ThumbDownOutlined from '@mui/icons-material/ThumbDownOutlined';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbUpOutlined from '@mui/icons-material/ThumbUpOutlined';
import TimerOutlined from '@mui/icons-material/TimerOutlined';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Tune from '@mui/icons-material/Tune';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Warning from '@mui/icons-material/Warning';
import WatchLater from '@mui/icons-material/WatchLater';
import Whatshot from '@mui/icons-material/Whatshot';
import Work from '@mui/icons-material/Work';

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

const Icon = ({ name, skin = '', style = {}, size = 'medium', ...props }) => {
  const components = {
    access_time: AccessTime,
    accessible_forward: AccessibleForward,
    accessible: Accessible,
    add: Add,
    wallet: AccountBalanceWallet,
    add_chart: Addchart,
    add_circle: AddCircle,
    add_alarm: AddAlarm,
    apps: Apps,
    arrow_drop_down: ArrowDropDown,
    arrow_drop_up: ArrowDropUp,
    arrow_left: ArrowLeft,
    arrow_right: ArrowRight,
    arrow_upward: ArrowUpward,
    assessment: Assessment,
    assignment: Assignment,
    assignment_ind: AssignmentInd,
    assignment_turned_in: AssignmentTurnedIn,
    attach_money: AttachMoney,
    auto_graph: AutoGraph,
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
    contact_support: ContactSupport,
    contrast: Contrast,
    credit_card: CreditCard,
    date_range: DateRange,
    delete: Delete,
    description_outlined: DescriptionOutlined,
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
    group_add: GroupAdd,
    home: Home,
    home_work: HomeWork,
    help: Help,
    info: Info,
    keyboard_arrow_down: KeyboardArrowDown,
    keyboard_arrow_left: KeyboardArrowLeft,
    keyboard_arrow_right: KeyboardArrowRight,
    keyboard_arrow_up: KeyboardArrowUp,
    launch: Launch,
    lightbulb_outlined: LightbulbOutlined,
    location_city: LocationCity,
    lock: Lock,
    lock_open: LockOpen,
    lock_outlined: LockOutlined,
    markunread: Markunread,
    menu_book: MenuBook,
    menu: Menu,
    more_vert: MoreVert,
    notification: Notifications,
    payment: Payment,
    pause_circle_outline: PauseCircleOutline,
    perm_device_information: PermDeviceInformation,
    person: Person,
    person_add: PersonAdd,
    person_circle: AccountCircle,
    phone_android: PhoneAndroid,
    print: Print,
    radio_button_checked: RadioButtonChecked,
    radio_button_unchecked: RadioButtonUnchecked,
    refresh: Refresh,
    receipt: Receipt,
    room: Room,
    search: Search,
    security: Security,
    send: Send,
    school: School,
    share: Share,
    star_border: StarBorder,
    star_half: StarHalf,
    star: Star,
    stars: Stars,
    star_rounded: StarRounded,
    swap_vert: SwapVert,
    thumb_down_outlined: ThumbDownOutlined,
    thumb_down: ThumbDown,
    thumb_up_outlined: ThumbUpOutlined,
    thumb_up: ThumbUp,
    timer_outlined: TimerOutlined,
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
      style={{
        color: skin,
        fontSize: sizes[size],
        maxWidth: sizes[size],
        ...style,
      }}
      data-qtm-preloader="icon"
    >
      {name}
    </SelectedIcon>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
  style: PropTypes.instanceOf(Object),
  skin: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
};

export default Icon;
