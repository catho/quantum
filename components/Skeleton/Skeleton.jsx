import PropTypes from 'prop-types';
import { theme as defaultTheme } from '../shared';
import { Circle, Text, Button, Tag, Rect } from './sub-components';

const Skeleton = ({
  type = 'rect',
  as = 'div',
  width = '100%',
  height = '14px',
  size = 'medium',
  theme = defaultTheme,
  ...props
}) => {
  switch (type) {
    case 'circle':
      return (
        <Circle
          as={as}
          width={width}
          height={height}
          size={size}
          theme={theme}
          {...props}
        />
      );

    case 'text':
      return (
        <Text
          as={as}
          width={width}
          height={height}
          size={size}
          theme={theme}
          {...props}
        />
      );

    case 'button':
      return (
        <Button
          as={as}
          width={width}
          height={height}
          size={size}
          theme={theme}
          {...props}
        />
      );

    case 'tag':
      return (
        <Tag
          as={as}
          width={width}
          height={height}
          size={size}
          theme={theme}
          {...props}
        />
      );

    default:
      return (
        <Rect
          as={as}
          width={width}
          height={height}
          size={size}
          theme={theme}
          {...props}
        />
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

  /** Used only for themification.  */
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Skeleton.Rect = ({ theme, width, height, as }) => (
  <Skeleton theme={theme} width={width} height={height} as={as} />
);

Skeleton.Circle = ({ theme, width, height, as }) => (
  <Skeleton theme={theme} width={width} height={height} as={as} type="circle" />
);

Skeleton.Text = ({ theme, width, height, as = 'span' }) => (
  <Skeleton theme={theme} width={width} height={height} as={as} type="text" />
);

Skeleton.Button = ({ theme, size, width, height, as }) => (
  <Skeleton
    theme={theme}
    width={width}
    height={height}
    as={as}
    size={size}
    type="button"
  />
);

Skeleton.Tag = ({ theme, size, width, height, as }) => (
  <Skeleton
    theme={theme}
    width={width}
    height={height}
    as={as}
    size={size}
    type="tag"
  />
);

export default Skeleton;
