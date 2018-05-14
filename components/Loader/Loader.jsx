import React from 'react';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';
import LoaderTypes from './LoaderTypes';

/** Placeholder loader element
 */
class Loader extends React.Component {
  static Image = LoaderTypes.Image;
  static Text = LoaderTypes.Text;
  static List = LoaderTypes.List;
  static IconList = LoaderTypes.IconList;

  render() {
    const {
      children,
      primaryColor,
      secondaryColor,
      width,
      height,
      speed,
      ...rest
    } = this.props;

    return (
      <ContentLoader
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        width={width}
        height={height}
        speed={speed}
        {...rest}
      >
        { children }
      </ContentLoader>);
  }
}

Loader.defaultProps = {
  primaryColor: '#ECEFF1',
  secondaryColor: '#CFD8DC',
  children: null,
  width: 400,
  height: 130,
  speed: 2,
};

Loader.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  /** SVG to be rendered as a Loader */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
  speed: PropTypes.number,
};

export default Loader;
