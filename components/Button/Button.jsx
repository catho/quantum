import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import buttonBaseStyles from '../shared/styles/ButtonBase.module.css';

const Button = ({
  children,
  icon,
  size,
  $as,
  theme,
  className,
  disabled,
  center,
  full,
  stroked,
  skin,
  ...rest
}) => {
  const isDefaultType = !stroked && !disabled;
  const isStrokedType = stroked && !disabled;

  const defaultButtonStyle = classNames(
    buttonBaseStyles.button,
    buttonBaseStyles[`button-${size}`],
    { [buttonBaseStyles['button-disable']]: disabled },
    { [buttonBaseStyles['button-center']]: center },
    { [buttonBaseStyles['button-default']]: isDefaultType },
    { [buttonBaseStyles[`button-default-${skin}`]]: isDefaultType },
    { [buttonBaseStyles['button-disable-stroked']]: disabled && stroked },
    { [buttonBaseStyles[`button-stroked-${skin}`]]: isStrokedType },
    { [buttonBaseStyles['button-full']]: full },
    buttonBaseStyles['shadow-2-neutral-500'],
    { [buttonBaseStyles[`shadow-4-${skin}-900`]]: !disabled },
    { [buttonBaseStyles[`shadow-4-${skin}-700`]]: !disabled },
    { [buttonBaseStyles[`shadow-8-${skin}-900`]]: !disabled },
    className,
  );

  const iconStyle = classNames(
    buttonBaseStyles['button-icon'],
    { [buttonBaseStyles['button-icon-with-children']]: children },
    buttonBaseStyles[`button-icon-${size}`],
  );

  return (
    <button type="button" className={defaultButtonStyle} size={size} {...rest}>
      {icon && (
        <Icon className={iconStyle} size={size} name={icon} theme={theme} />
      )}
      {children}
    </button>
  );
};

Button.defaultProps = {
  center: false,
  disabled: false,
  stroked: false,
  full: false,
  icon: '',
  size: 'medium',
  skin: 'primary',
  type: 'button',
  children: undefined,
  $as: undefined,
  onClick: () => {},
};

Button.propTypes = {
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  stroked: PropTypes.bool,
  full: PropTypes.bool,
  /** Icon name. The full catalogue can be found
   * [here](/?path=/docs/foundation-icons--page#catalog) */
  icon: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  skin: PropTypes.oneOf([
    'neutral',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  /** https://www.styled-components.com/docs/api#as-polymorphic-prop */
  $as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
};

const IconButton = ({ className = '', skin, ...props }) => {
  const classIconButton = classNames(
    buttonBaseStyles['icon-button'],
    className,
  );
  return <Button className={classIconButton} {...props} />;
};

IconButton.propTypes = {
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  skin: PropTypes.oneOf([
    'neutral',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ]),
};

IconButton.defaultProps = {
  size: 'medium',
  skin: 'neutral',
};

Button.Icon = IconButton;

export default Button;
