import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import axios from 'axios';

import HeaderBar from './sub-components/HeaderBar';
import PromotionBar from './sub-components/PromotionBar';
import Menu from './sub-components/Menu';

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

    this.state = {
      showPromotion: false,
    };
  }

  componentDidMount() {
    this.fetchPromotion();
  }

  async fetchPromotion() {
    try {
      const { data } = await axios(`${process.env.APPLICATION_PATH}/api/trials`);
      this.setState({ showPromotion: data });
    } catch (error) {
      process.stderr.write(error);
    }
  }

  render() {
    const {
      data,
      path,
      promotionUrl,
      handleMenuOpen,
      handleLoginOpen,
      menuOpened,
      loginOpened,
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
            handleMenuOpen={handleMenuOpen}
            handleLoginOpen={handleLoginOpen}
            menuOpened={menuOpened}
            loginOpened={loginOpened}
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
  handleMenuOpen: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  menuOpened: PropTypes.string,
  loginOpened: PropTypes.bool,
};

Header.defaultProps = {
  data: null,
  promotionUrl: 'https://seguro.catho.com.br/cadastro-candidato',
  menuOpened: null,
  loginOpened: false,
};

export default Header;
