import React from 'react';
import PropTypes from 'prop-types';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const Menu = ({
  data, handleMenuOpen, handleLoginOpen, menuOpened, loginOpened,
}) => (
  <section>
    <MenuMobile data={data} menuOpened={menuOpened} />
    <MenuDesktop
      data={data}
      handleLoginOpen={handleLoginOpen}
      handleMenuOpen={handleMenuOpen}
      menuOpened={menuOpened}
      loginOpened={loginOpened}
    />
  </section>
);

Menu.propTypes = {
  data: PropTypes.instanceOf(Object),
  handleMenuOpen: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  menuOpened: PropTypes.string,
  loginOpened: PropTypes.bool,
};

Menu.defaultProps = {
  data: null,
  menuOpened: null,
  loginOpened: false,
};

export default Menu;
