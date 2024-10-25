import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Icon from '../Icon';
import styles from './Alert.module.css';

const Alert = ({
  icon = null,
  skin = 'neutral',
  children,
  onClose = undefined,
  className,
  ...rest
}) => {
  const [show, setShow] = useState(true);
  const contentClass = classNames(styles.content, className);
  const alertClass = classNames(styles['alert-icon'], styles[`icon-${skin}`]);
  const closeButtonClass = classNames(
    styles['close-button'],
    styles[`icon-${skin}`],
  );
  const wrapperClass = classNames(styles.wrapper, styles[`wrapper-${skin}`]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    show && (
      <div className={wrapperClass} {...rest} role="alert">
        <div className={contentClass}>
          {icon && <Icon name={icon} className={alertClass} />}
          {children && <span>{children}</span>}
          {onClose && (
            <Button.Icon
              onClick={handleClose}
              icon="close"
              className={closeButtonClass}
            />
          )}
        </div>
      </div>
    )
  );
};

Alert.propTypes = {
  /** At least one children is required for Alert component properly works */
  children: PropTypes.node.isRequired,
  /** Icon name. The full catalogue can be found
   * [here](/?path=/docs/foundation-icons--page) */
  icon: PropTypes.string,
  /** You must pass a callback that is called when close button is clicked */
  onClose: PropTypes.func,
  skin: PropTypes.oneOf(['primary', 'success', 'error', 'neutral', 'warning']),
};

export default Alert;
