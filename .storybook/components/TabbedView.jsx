import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import ColorPalette from '../../components/Colors';

const TabStyle = styled.div`
  background-color: tomato;
`

const Tab = ({ children }) => (
  <React.Fragment>
    { children }
  </React.Fragment>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

const renderIf = (conditional, renderFn) => {
  return conditional ? renderFn() : null;
}

const Navbar = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0;
  padding: 0;
  list-style: none;
`

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
    color: ${ColorPalette.PRIMARY.BLUE.WINDOWS};
  }

  ${props => props.active && css`
    color: ${ColorPalette.PRIMARY.BLUE.WINDOWS};
    border-color: ${ColorPalette.PRIMARY.BLUE.WINDOWS};

    &::before {
      width: 100%;
      height: 100%;
      border-bottom-color: ${ColorPalette.PRIMARY.BLUE.WINDOWS};
    }
  `}
`

class TabbedView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0
    };
  }

  onTabClick = tab => {
    const { children } = this.props;
    this.setState({activeTabId: children.indexOf(tab)})
  };

  render() {
    const { children, componentName } = this.props;

    return (
      <React.Fragment>
        <Navbar>
          {children.map(
            (tab, index) => (
              <NavItem
                key={tab.props.title}
                onClick={() => this.onTabClick(tab)}
                active={children.indexOf(tab) === this.state.activeTabId}>{tab.props.title}</NavItem>
            )
          )}
        </Navbar>

        {
          componentName &&
            <h2><code>{`<${componentName}/>`}</code></h2>
        }

        {children.map(
          (child, index) => renderIf(this.props.children.indexOf(child) == this.state.activeTabId, () => child)
        )}
      </React.Fragment>
    );
  }
}

export { Tab, TabbedView };
