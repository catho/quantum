import PropTypes from 'prop-types';
import classname from 'classnames';
import styles from './Button.module.css';

const Button = ({
  children,
  icon,
  size,
  $as,
  center,
  full,
  primaryColor,
  theme,
  className: classComponent,
  ...rest
}) => {
  const className = classname(
    styles['button-wrapper'],
    { [styles['button-centered']]: center },
    { [styles['button-full-width']]: full },
    classComponent,
  );

  return (
    <button type="button" className={className} {...rest}>
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
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
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
  // onClick: PropTypes.func,
  // theme: PropTypes.shape({
  //   baseFontSize: PropTypes.number,
  //   colors: PropTypes.object,
  //   spacing: PropTypes.object,
  //   breakpoints: PropTypes.object,
  //   components: PropTypes.shape({
  //     button: PropTypes.object,
  //   }),
  // }),
};

export default Button;
