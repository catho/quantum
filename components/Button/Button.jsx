import PropTypes from 'prop-types';
import classname from 'classnames';
import styles from './Button.module.css';

const Button = ({
  children,
  icon,
  size,
  skin,
  $as,
  center,
  full,
  primaryColor,
  theme,
  className: classComponent,
  style: styleComponent,
  ...rest
}) => {
  const className = classname(
    styles['button-wrapper'],
    { [styles['button-centered']]: center },
    { [styles['button-full-width']]: full },
    classComponent,
  );

  // É mais pertinente aplicar uma classe para cada skin ao invés de definir o valor da variável css,
  // pois os valores sobrescritos em style sobrescrevem os valores definidos nas classes (exceto valores com !important)
  // O caso abaixo é pertinente para aplicar cores foram da paleta de cores do style guide

  const style = {
    backgroundColor: `var(--components-button-skin-${skin}-maincolor-700)`,
    borderColor: `var(--components-button-skin-${skin}-maincolor-700)`,
    ...styleComponent,
  };

  return (
    <button type="button" className={className} {...rest} style={style}>
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
  style: {},
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
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
