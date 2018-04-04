import Colors from './components/Colors';

const theme = {
  buttons: {
    skins: {
      'border-alpha': {
        backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
        bordered: true,
        textColor: '#FFF',
      },
      'solid-alpha': {
        backgroundColor: Colors.PRIMARY.BLUE.PEACOCK,
        bordered: false,
        textColor: '#FFF',
      },
      'solid-beta': {
        backgroundColor: Colors.SECONDARY.YELLOW.TANGERINE,
        bordered: false,
        textColor: '#FFF',
      },
      'solid-white': {
        backgroundColor: '#FFF',
        bordered: false,
        textColor: Colors.PRIMARY.BLUE.PEACOCK,
      },
    }
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
