import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    const { visible } = this.props;
    this.state = { visible };
  }

  isVisible = (visible) => this.setState({ visible });

  render() {
    const {
      children,
      className,
      placement,
      text,
      visible: visibleProp,
      multiline,
      ...rest
    } = this.props;
    const { visible: visibleState } = this.state;

    const wrapperClass = classNames(
      styles['tooltip-wrapper'],
      { [styles['tooltip-wrapper-multiline']]: multiline },
      className,
    );
    const tipClass = classNames(styles.tip, styles[`tip-${placement}`], {
      [styles['tip-visible']]: visibleProp || visibleState,
    });
    const tipTextClass = classNames(styles['tip-text'], {
      [styles['tip-text-multiline']]: multiline,
    });

    return (
      <div
        onMouseEnter={() => this.isVisible(true)}
        onMouseLeave={() => this.isVisible(false)}
        className={wrapperClass}
        {...rest}
      >
        <div className={tipClass}>
          <span className={tipTextClass}>{text}</span>
        </div>
        {children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  /** Content the tooltip will show */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** Define tooltip positioning */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  visible: PropTypes.bool,
  multiline: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tooltip.defaultProps = {
  placement: 'top',
  visible: false,
  multiline: false,
};

export default Tooltip;
