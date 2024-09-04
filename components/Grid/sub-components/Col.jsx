import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Col.module.css';

const parserOffset = (offset) => (offset ? offset + 1 : undefined);

const Col = ({
  xsmall = undefined,
  small = undefined,
  medium = undefined,
  large = undefined,
  'xsmall-offset': xsmallOffset,
  'small-offset': smallOffset,
  'medium-offset': mediumOffset,
  'large-offset': largeOffset,
  children,
  className,
  style,
  ...rest
}) => {
  const classCol = classnames(
    styles.col,
    {
      [styles['col-xsmall']]: xsmall,
      [styles['col-small']]: small,
      [styles['col-medium']]: medium,
      [styles['col-large']]: large,
      [styles['col-xsmall-offset']]: xsmallOffset,
      [styles['col-small-offset']]: smallOffset,
      [styles['col-medium-offset']]: mediumOffset,
      [styles['col-large-offset']]: largeOffset,
    },
    className,
  );

  return (
    <div
      {...rest}
      className={classCol}
      style={{
        '--qtm-col-xsmall-size': xsmall,
        '--qtm-col-small-size': small,
        '--qtm-col-medium-size': medium,
        '--qtm-col-large-size': large,
        '--qtm-col-xsmall-offset': parserOffset(xsmallOffset),
        '--qtm-col-small-offset': parserOffset(smallOffset),
        '--qtm-col-medium-offset': parserOffset(mediumOffset),
        '--qtm-col-large-offset': parserOffset(largeOffset),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  xsmall: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  'xsmall-offset': PropTypes.number,
  'small-offset': PropTypes.number,
  'medium-offset': PropTypes.number,
  'large-offset': PropTypes.number,
};

Col.displayName = 'Col';

export default Col;
