import Colors from './components/Colors';

const theme = {
  buttons: {
    skins: {
      'border-alpha': {
        backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
        borderColor: Colors.PRIMARY.BLUE.PEACOCK,
        textColor: Colors.PRIMARY.BLUE.PEACOCK,
      },
      'solid-alpha': {
        backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
        textColor: Colors.NEUTRAL.GRAY.WHITE,
      },
      'solid-beta': {
        backgroundColor: Colors.SECONDARY.YELLOW.TANGERINE,
        textColor: Colors.NEUTRAL.GRAY.WHITE,
      },
      'solid-white': {
        backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
        textColor: Colors.PRIMARY.BLUE.PEACOCK,
      },
      link: {
        backgroundColor: Colors.NEUTRAL.GRAY.WHITE,
        textColor: Colors.PRIMARY.BLUE.PEACOCK,
      },
    },
  },
  sizes: {
    radius: '4px',
    fieldHeight: '40px',
  },
  mixins: {
    transition: (property = 'all', timing = '.2s', type = 'ease-in-out') =>
      `transition: ${property} ${timing} ${type}`,
  },
};

export default theme;
