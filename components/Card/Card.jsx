import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.module.css';
import alphaNumber, {
  isValidAlphaNumber,
} from './alphaNumberPropTypesValidator';

const NestedComponentMock = ({ children }) => <div>{children}</div>;

class Card extends Component {
  static Header = NestedComponentMock;

  static HeaderText = NestedComponentMock;

  static Title = NestedComponentMock;

  static Description = NestedComponentMock;

  static Media = NestedComponentMock;

  static Thumbnail = NestedComponentMock;

  static Content = NestedComponentMock;

  static Footer = NestedComponentMock;

  render() {
    const {
      children,
      className: classComponent,
      style: styleComponent,
      backgroundOpacity,
    } = this.props;
    const className = classNames(styles['card-wrapper'], classComponent);
    const customStyle = {
      backgroundColor: `rgba(255, 255, 255, ${
        isValidAlphaNumber(backgroundOpacity) ? backgroundOpacity : '1'
      })`,
      ...styleComponent,
    };
    return (
      <article className={className} style={customStyle}>
        {children}
      </article>
    );
  }
}

Card.propTypes = {
  /** alpha value (number in range [0,1]) to set background opacity. 0 is fully transparent and 1 is fully opaque. */
  backgroundOpacity: alphaNumber,
  className: PropTypes.string,
  style: PropTypes.object,
};

Card.defaultProps = {
  backgroundOpacity: undefined,
  className: '',
  style: {},
};

export default Card;
