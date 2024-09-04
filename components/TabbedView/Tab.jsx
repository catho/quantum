import PropTypes from 'prop-types';

const Tab = ({ children, title }) => title && children;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  badge: PropTypes.node,
  icon: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tab.displayName = 'Tab';

export default Tab;
