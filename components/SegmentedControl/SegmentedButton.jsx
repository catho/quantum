import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import HiddenInput from '../shared/HiddenInput';
import buttonBaseStyles from '../shared/styles/ButtonBase.module.css';
import styles from './SegmentedButton.module.css';
import { createUniqId } from '../shared/uniqId';

HiddenInput.displayName = 'HiddenInput';

const uniqId = createUniqId('segmented-button-');

const SegmentedButton = ({
  label,
  value,
  checked = undefined,
  name,
  onChange = () => {},
  icon = undefined,
  darkMode,
  className,
  ...rest
}) => {
  const ID = uniqId();
  const stroked = darkMode ? checked : !checked;

  const labelClass = classNames(
    buttonBaseStyles.button,
    buttonBaseStyles['button-medium'],
    { [buttonBaseStyles['button-default']]: !stroked },
    { [buttonBaseStyles['button-default-primary']]: !stroked },
    { [buttonBaseStyles['button-stroked-primary']]: stroked },
    buttonBaseStyles['shadow-2-neutral-500'],
    buttonBaseStyles['shadow-4-primary-900'],
    buttonBaseStyles['shadow-4-primary-700'],
    buttonBaseStyles['shadow-8-primary-900'],
    styles.label,
    { [styles['label-checked']]: checked },
    className,
  );

  return (
    <label
      aria-label={label}
      className={labelClass}
      htmlFor={ID}
      tabIndex={checked ? -1 : 0}
      {...rest}
    >
      <HiddenInput
        id={ID}
        type="radio"
        name={name}
        value={value}
        checked={!!checked}
        onChange={(e) => onChange(e, { value, label })}
      />
      {icon ? <Icon name={icon} aria-label={label} /> : label}
    </label>
  );
};

SegmentedButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  darkMode: PropTypes.bool.isRequired,
};

export default SegmentedButton;
