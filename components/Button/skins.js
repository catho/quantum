import Colors from '../Colors';

export default (props) => {
  let skin = {
    backgroundColor: Colors.SECONDARY.YELLOW.TANGERINE,
    textColor: Colors.NEUTRAL.GRAY.WHITE,
  };

  if (props.secondary) {
    skin = {
      backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
      textColor: Colors.NEUTRAL.GRAY.WHITE,
    };
  }

  if (props.hollow) {
    skin = {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      borderColor: Colors.PRIMARY.BLUE.PEACOCK,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  }

  if (props.light) {
    skin = {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  }

  if (props.link) {
    skin = {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
      textColor: Colors.PRIMARY.BLUE.PEACOCK,
    };
  }

  if (props.disabled) {
    skin = {
      backgroundColor: Colors.NEUTRAL.GRAY.WHITETWO,
      textColor: Colors.NEUTRAL.DARKEYGRAY.WARMGREY,
    };
  }

  return skin;
};
