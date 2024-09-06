import PropTypes from 'prop-types';
import { Circle, Text, Button, Tag, Rect } from './sub-components';

const Skeleton = ({
  type = 'rect',
  as = 'div',
  width = '100%',
  height = '14px',
  size = 'medium',
  ...props
}) => {
  switch (type) {
    case 'circle':
      return (
        <Circle as={as} width={width} height={height} size={size} {...props} />
      );

    case 'text':
      return (
        <Text as={as} width={width} height={height} size={size} {...props} />
      );

    case 'button':
      return (
        <Button as={as} width={width} height={height} size={size} {...props} />
      );

    case 'tag':
      return (
        <Tag as={as} width={width} height={height} size={size} {...props} />
      );

    default:
      return (
        <Rect as={as} width={width} height={height} size={size} {...props} />
      );
  }
};

Skeleton.propTypes = {
  /** Sets the component behavior */
  type: PropTypes.oneOf(['rect', 'circle', 'text', 'button', 'tag']),
  as: PropTypes.oneOf(['div', 'span']),
  width: PropTypes.string,
  height: PropTypes.string,

  /** Will affect only types that not uses the prop `size` */
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
};

Skeleton.Rect = ({ width, height, as }) => (
  <Skeleton width={width} height={height} as={as} />
);

Skeleton.Circle = ({ width, height, as }) => (
  <Skeleton width={width} height={height} as={as} type="circle" />
);

Skeleton.Text = ({ width, height, as = 'span' }) => (
  <Skeleton width={width} height={height} as={as} type="text" />
);

Skeleton.Button = ({ size, width, height, as }) => (
  <Skeleton width={width} height={height} as={as} size={size} type="button" />
);

Skeleton.Tag = ({ size, width, height, as }) => (
  <Skeleton width={width} height={height} as={as} size={size} type="tag" />
);

export default Skeleton;
