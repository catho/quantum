import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './TextInput.module.css';

export const useTextInputClass = ({
  hasLabel,
  error,
  hasDefaultValue,
  skin = 'default',
  className,
}) =>
  classNames(
    styles['text-input'],
    {
      [styles['with-label']]: hasLabel,
      [styles.error]: error,
      [styles['has-default-value']]: hasDefaultValue,
      [styles['text-input-dark']]: skin === 'dark',
      [styles['error-dark']]: error && skin === 'dark',
    },
    className,
  );

const TextInput = forwardRef(
  (
    {
      className,
      style,
      hasLeftIcon,
      hasRightIcon,
      hasLabel,
      hasDefaultValue,
      error,
      skin = 'default',
      ...rest
    },
    ref,
  ) => {
    const textInputClass = useTextInputClass({
      hasLabel,
      error,
      hasDefaultValue,
      skin,
      className,
    });

    return (
      <input
        ref={ref}
        className={textInputClass}
        style={{
          '--icon-size': 'var(--qtm-spacing-large)',
          '--icon-area':
            'calc(var(--qtm-spacing-medium) + var(--icon-size) + var(--qtm-spacing-xsmall))',
          paddingRight: hasRightIcon ? 'var(--icon-area)' : undefined,
          paddingLeft: hasLeftIcon ? 'var(--icon-area)' : undefined,
          ...style,
        }}
        {...rest}
      />
    );
  },
);

TextInput.displayName = 'TextInput';

export default TextInput;
