import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Tab from './Tab';

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
  height: 48px;
  font-size: 20px;
  box-sizing: border-box;
  line-height: 1.5;
  overflow: hidden;
  padding: 9px 16px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  min-width: 90px;
  flex-shrink: 0;

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

const RenderIf = ({ conditional, children }) => conditional && children;

class TabbedView extends React.Component {
  static Tab = Tab;

  constructor(props) {
    super(props);

    const { children, activeTab } = props;

    if (activeTab) {
      this.state = {
        activeTab,
      };
    } else {
      const [firstTab] = React.Children.toArray(children);
      const {
        props: { title },
      } = firstTab;
      this.state = {
        activeTab: title,
      };
    }
  }

  onTabClick = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
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
    PropTypes.arrayOf(
      PropTypes.oneOfType(
        PropTypes.instanceOf(Tab),
        PropTypes.instanceOf(TabbedView.Tab),
      ),
    ),
    PropTypes.instanceOf(Tab),
  ]).isRequired,
  activeTab: PropTypes.string,
};

TabbedView.defaultProps = {
  activeTab: undefined,
};

TabbedView.displayName = 'TabbedView';

export default TabbedView;
