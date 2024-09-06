import { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from './Container';
import styles from './Row.module.css';

const Row = ({
  children,
  'no-gutters': rowNoGutters = false,
  className,
  ...rest
}) => {
  const rowClass = classNames(
    styles.row,
    {
      [styles['no-gutter']]: rowNoGutters,
    },
    className,
  );

  const isNumberOrString = (child) =>
    typeof child === 'string' || typeof child === 'number';

  const applyNoGutters = (child) => {
    if (
      isNumberOrString(child) ||
      (child.type !== Row && child.type !== Container)
    ) {
      return child;
    }

    const { 'no-gutters': childNoGutters } = child.props;

    const ChildWithNoGutters = cloneElement(child, {
      'no-gutters': childNoGutters || rowNoGutters || undefined,
    });
    return ChildWithNoGutters;
  };

  const applyChildrenProps = (c) =>
    Array.isArray(c)
      ? c
          .filter((child) => isValidElement(child) || isNumberOrString(child))
          .map((child) => applyNoGutters(child))
      : applyNoGutters(c);

  return (
    <div {...rest} className={rowClass}>
      {applyChildrenProps(children)}
    </div>
  );
};

Row.propTypes = {
  'no-gutters': PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Row.displayName = 'Row';

export default Row;
