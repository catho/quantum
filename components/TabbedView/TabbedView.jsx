import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';

const Navbar = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  list-style: none;
  margin: 0 0 25px 0;
  padding: 0;
`;

Navbar.displayName = 'Navbar';

const NavItem = styled.li`
  cursor: pointer;
  font-size: 17px;
  letter-spacing: initial;
  line-height: initial;
  overflow: hidden;
  padding: 18px 18px 16px;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    transition: width 0.25s ease-out;
  }
  &:hover {
    background-color: ${Colors.BLUE[200]};
  }
  ${props =>
    props.active &&
    `color: ${Colors.COBALT[500]};
    font-weight: bold;
    border-bottom: 4px solid ${Colors.COBALT[500]};
  `};
`;

NavItem.displayName = 'NavItem';

const Tab = ({ children, title }) => <>{title && children}</>;

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tab.displayName = 'Tab';

const RenderIf = ({ conditional, children }) => conditional && children;

class TabbedView extends React.Component {
  static Tab = Tab;

  constructor(props) {
    super(props);

    const { children } = props;

    const [firstTab] = React.Children.toArray(children);
    this.state = {
      activeTab: firstTab.props.title,
    };
  }

  onTabClick = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
        {activeTab}
        <Navbar>
          {React.Children.map(children, ({ props: { title } }) => (
            <NavItem
              key={title}
              onClick={() => this.onTabClick(title)}
              active={title === activeTab}
            >
              {title}
            </NavItem>
          ))}
        </Navbar>

        {React.Children.map(children, child => (
          <RenderIf conditional={child.props.title === activeTab}>
            {child.props.children}
          </RenderIf>
        ))}
      </React.Fragment>
    );
  }
}

TabbedView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Tab)),
    PropTypes.instanceOf(Tab),
  ]).isRequired,
};

TabbedView.displayName = 'TabbedView';

export { Tab, TabbedView };
