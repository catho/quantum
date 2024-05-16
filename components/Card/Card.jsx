import { Component } from 'react';
import classNames from 'classnames';
import { hexToRgba } from '../shared';

import {
  Header,
  HeaderText,
  Title,
  Description,
  Media,
  Thumbnail,
  Content,
  Footer,
} from './sub-components';
import alphaNumber, {
  isValidAlphaNumber,
} from './alphaNumberPropTypesValidator';

import styles from './Card.module.css';

class Card extends Component {
  static Header = Header;

  static HeaderText = HeaderText;

  static Title = Title;

  static Description = Description;

  static Media = Media;

  static Thumbnail = Thumbnail;

  static Content = Content;

  static Footer = Footer;

  render() {
    const { className = '', style, backgroundOpacity, ...rest } = this.props;
    const classArticle = classNames(
      styles['card-wrapper'],
      'shadow-1',
      className,
    );

    return (
      <article
        className={classArticle}
        style={{
          backgroundColor: isValidAlphaNumber(backgroundOpacity)
            ? hexToRgba('#ffffff', backgroundOpacity)
            : undefined,
          ...style,
        }}
        {...rest}
      />
    );
  }
}

Card.propTypes = {
  /** alpha value (number in range [0,1]) to set background opacity. 0 is fully transparent and 1 is fully opaque. */
  backgroundOpacity: alphaNumber,
};

Card.defaultProps = {
  backgroundOpacity: undefined,
};

export default Card;
