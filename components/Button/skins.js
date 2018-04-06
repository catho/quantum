import Colors from '../Colors';

export default ({
  secondary, hollow, light, link, disabled,
}) => {
  if (secondary) {
    return {
      backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
      textColor: Colors.NEUTRAL.GRAY.WHITE,
    };
  } else if (hollow) {
    return {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      borderColor: Colors.PRIMARY.BLUE.PEACOCK,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  } else if (light) {
    return {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  } else if (link) {
    return {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  } else if (disabled) {
    return {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITETWO,
      textColor: Colors.NEUTRAL.DARKEYGRAY.WARMGREY,
    };
  }

  return {
    backgroundColor: Colors.SECONDARY.YELLOW.TANGERINE,
    textColor: Colors.NEUTRAL.GRAY.WHITE,
  };
};
