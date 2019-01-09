import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Colors from '../../../components/Colors';

const Navbar = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0 25px 0;
  padding: 0;
  list-style: none;
`;

Navbar.displayName = 'Navbar';

const NavItem = styled.li`
  padding: 18px 18px 16px;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  position: relative;

  &::before {
    border-bottom: 3px solid transparent;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;

    transition: width 0.25s ease-out;
  }

  &:hover {
    color: ${Colors.PRIMARY['500']};
  }

  ${props =>
    props.active &&
    css`
      color: ${Colors.PRIMARY['500']};
      border-color: ${Colors.PRIMARY['500']};

      &::before {
        width: 100%;
        height: 100%;
        border-bottom-color: ${Colors.PRIMARY['500']};
      }
    `};
`;

NavItem.displayName = 'NavItem';

const Tab = ({ children, title }) => (
  <React.Fragment>{title && children}</React.Fragment>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Tab.displayName = 'Tab';

const renderIf = (conditional, renderFn) => conditional && renderFn();

class TabbedView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  onTabClick = tab => {
    const { children } = this.props;
    this.setState({ activeTab: children.indexOf(tab) });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <React.Fragment>
        <Navbar>
          {React.Children.map(
            children,
            tab =>
              tab && (
                <NavItem
                  key={tab.props.title}
                  onClick={() => this.onTabClick(tab)}
                  active={children.indexOf(tab) === activeTab}
                >
                  {tab.props.title}
                </NavItem>
              ),
          )}
        </Navbar>

        {React.Children.map(children, child =>
          renderIf(children.indexOf(child) === activeTab, () => child),
        )}
      </React.Fragment>
    );
  }
}

TabbedView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TabbedView.displayName = 'TabbedView';

export { Tab, TabbedView };
