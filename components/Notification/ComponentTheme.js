import Colors from '../Colors';

const ComponentTheme = {
  default: {
    backgroundColor: Colors.SECONDARY['500'],
    borderColor: Colors.SECONDARY['600'],
    color: Colors.WHITE,
  },
  success: {
    backgroundColor: Colors.ACTION['400'],
    borderColor: Colors.ACTION['600'],
    color: Colors.WHITE,
  },
  warning: {
    backgroundColor: Colors.WARNING['400'],
    borderColor: Colors.WARNING['600'],
    color: Colors.WHITE,
  },
  error: {
    backgroundColor: Colors.DANGER['400'],
    borderColor: Colors.DANGER['600'],
    color: Colors.WHITE,
  },
  info: {
    backgroundColor: Colors.INFO['100'],
    borderColor: Colors.INFO['300'],
    color: Colors.WHITE,
  },
};

export default ComponentTheme;
