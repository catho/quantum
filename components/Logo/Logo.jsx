import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import LogoB2C from '../../static/logoB2c.svg';
import LogoTypes from './LogoTypes';

class Logo extends Component {
  static B2B = LogoTypes.B2B;
  static B2C = LogoTypes.B2C;
  static Course = LogoTypes.Course;
  static Google = LogoTypes.Google;
  static Facebook = LogoTypes.Facebook;

  render() {
    const { src, ...props } = this.props;
    return (
      <Image src={src} {...props} />
    );
  }
}

Logo.defaultProps = {
  src: LogoB2C,
  width: 100,
  height: 50,
};

Logo.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;
