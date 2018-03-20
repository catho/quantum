import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import cookie from 'react-cookies';
import axios from 'axios';
import HeaderBar from './sub-components/HeaderBar';
import PromotionBar from './sub-components/PromotionBar';
import Menu from './sub-components/Menu';
import { BREAKPOINTS } from '../../components/Grid';
import dataSource from '../../components/Header/data';

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  @font-face {
    font-family: cathoIconFontB2c;
    src: url('https://static.catho.com.br/vendor/icon-font/fonts/cathoIconFont/b2c/cathoIconFont.ttf') format('truetype');
  }

  @font-face {
    font-family: cathoIconFontSite;
    src: url('https://static.catho.com.br/vendor/icon-font/fonts/cathoIconFont/site/cathoIconFont.ttf') format('truetype');
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.menuState = {
      OPENED: 'opened',
      CLOSED: 'closed',
    };

    this.state = {
      menuOpened: null,
      loginOpened: false,
      showPromotion: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.fetchPromotion();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  handleMenuOpen = () => {
    this.setState({
      menuOpened: this.state.menuOpened !== this.menuState.OPENED ?
        this.menuState.OPENED : this.menuState.CLOSED,
      loginOpened: false,
    }, function hideScrollBar() {
      document.body.style.overflow = (this.state.menuOpened) ? 'hidden' : 'auto';
    });
  }

  handleLoginOpen = () => {
    this.setState({
      loginOpened: !this.state.loginOpened,
      menuOpened: this.state.menuOpened === this.menuState.OPENED ? this.menuState.CLOSED : null,
    });
  }

  updateDimensions() {
    if (window.innerWidth > BREAKPOINTS.tablet) {
      this.setState({
        menuOpened: null,
      });
    }
  }

  async fetchPromotion() {
    const regionalizacao = cookie.load('regionalizacao');

    if (regionalizacao) {
      const [city, state] = regionalizacao.split('_');

      try {
        const { data } = await axios(`http://home.vs/proxy-trials/?city=${city}&state=${state}`);
        this.setState({ showPromotion: data });
      } catch (error) {
        process.stderr.write(error);
      }
    }
  }

  render() {
    const {
      data,
      path,
      promotionUrl,
    } = this.props;

    return (
      <ThemeProvider theme={data.theme}>
        <header>
          <HeaderBar
            data={data.segments}
            path={path}
          />
          <Menu
            data={data}
            handleMenuOpen={this.handleMenuOpen}
            handleLoginOpen={this.handleLoginOpen}
            menuOpened={this.state.menuOpened}
            loginOpened={this.state.loginOpened}
          />
          {
            this.state.showPromotion &&
            <PromotionBar data={data.promotion} href={promotionUrl}>
              Teste por 30 dias grátis em vez de 7 dias. <span style={{ textDecoration: 'underline' }}>Aproveite essa condição exclusiva!</span>
            </PromotionBar>
          }
        </header>
      </ThemeProvider>
    );
  }
}

Header.propTypes = {
  data: PropTypes.instanceOf(Object),
  path: PropTypes.string.isRequired,
  promotionUrl: PropTypes.string,
};

Header.defaultProps = {
  data: dataSource,
  promotionUrl: 'https://seguro.catho.com.br/cadastro-candidato',
};

export default Header;
