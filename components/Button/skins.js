import Colors from '../Colors';

const skins = {
  secondary: {
    backgroundColor: Colors.PRIMARY['500'],
    textColor: Colors.WHITE,
  },
  hollow: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.PRIMARY['500'],
    textColor: Colors.PRIMARY['500'],
  },
  light: {
    backgroundColor: Colors.WHITE,
    textColor: Colors.PRIMARY['500'],
  },
  link: {
    backgroundColor: Colors.WHITE,
    textColor: Colors.PRIMARY['500'],
  },
  default: {
    backgroundColor: Colors.SECONDARY['600'],
    textColor: Colors.WHITE,
  },
};

export default ({ skin }) => skins[skin] || skins.default;
