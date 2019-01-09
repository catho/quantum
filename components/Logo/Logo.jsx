import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import LogoCandidate from '../../static/logoB2c.svg';
import LogoTypes from './LogoTypes';

class Logo extends Component {
  static Business = LogoTypes.Business;

  static Candidate = LogoTypes.Candidate;

  static Education = LogoTypes.Education;

  static Google = LogoTypes.Google;

  static Facebook = LogoTypes.Facebook;

  render() {
    const { src, ...props } = this.props;
    return <Image src={src} {...props} />;
  }
}

Logo.defaultProps = {
  src: LogoCandidate,
  alt: 'Logo da Catho',
  width: 100,
  height: 50,
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Logo;
