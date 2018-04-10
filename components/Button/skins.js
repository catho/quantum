import Colors from '../Colors';

const skins = {
  secondary: {
    backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
    textColor: Colors.NEUTRAL.GRAY.WHITE,
  },
  hollow: {
    backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
    borderColor: Colors.PRIMARY.BLUE.PEACOCK,
    textColor: Colors.PRIMARY.BLUE.PEACOCK,
  },
  light: {
    backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
    textColor: Colors.PRIMARY.BLUE.PEACOCK,
  },
  link: {
    backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
    textColor: Colors.PRIMARY.BLUE.PEACOCK,
  },
  disabled: {
    backgroundColor: Colors.NEUTRAL.GRAY.WHITETWO,
    textColor: Colors.NEUTRAL.DARKERGRAY.WARMGREY,
  },
  default: {
    backgroundColor: Colors.SECONDARY.YELLOW.TANGERINE,
    textColor: Colors.NEUTRAL.GRAY.WHITE,
  },
};

export default ({ skin }) => skins[skin] || skins.default;
