import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  components,
  baseFontSize as defaultBaseFontSize,
  breakpoints as defaultBreakpoints,
} from '../shared/theme';
import Tab from './Tab';
import { query } from '../Grid/sub-components/shared';

const getSkinByThemeColor = (skin, themeSkins) => themeSkins[skin];

const Navbar = styled.nav.attrs({
  role: 'tablist',
})`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0 25px 0;
  padding: 0;
  overflow-x: scroll;
  max-width: 100%;

  ${({
    skin,
    theme: {
      components: {
        tabbedView: { skins },
      },
      breakpoints,
    },
  }) => {
    const { background } = getSkinByThemeColor(skin, skins);
    const q = query(breakpoints).medium;

    return css`
      background-color: ${background};

      ${q`
        overflow-x: auto;
      `}
    `;
  }}
`;

Navbar.displayName = 'Navbar';

const NavItem = styled.button.attrs({
  role: 'tab',
})`
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
  height: 56px;
  letter-spacing: 0.24px;
  line-height: 1.5;
  min-width: 90px;
  outline: none;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-align: center;
  transition: all 0.2s ease-in-out;

  ${({
    skin,
    children,
    theme: {
      components: {
        tabbedView: { skins },
      },
      baseFontSize,
    },
    fluid,
  }) => {
    const {
      background,
      text,
      activeText,
      hoverBackground,
      border,
    } = getSkinByThemeColor(skin, skins);
    return css`
      border-bottom: 1px solid ${border};
      background-color: ${background};
      font-size: ${baseFontSize}px;
      color: ${text};

      ${fluid
        ? `
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: ${(100 / children.length).toFixed(2)}%;
      `
        : null}

      &[aria-selected='true'] {
        &::after {
          content: ' ';
          background-color: ${activeText};
          position: absolute;
          left: 0px;
          bottom: 0px;
          height: 3px;
          border-radius: 4px 4px 0 0;
          width: 100%;
        }
        border-bottom: 1px solid ${activeText};
        color: ${activeText};
        cursor: default;
      }

      &:hover {
        color: ${activeText};
        border-bottom: 1px solid ${activeText};
        background-color: ${hoverBackground};
      }
    `;
  }}
`;

NavItem.displayName = 'NavItem';

const TitleContainer = styled.span`
  vertical-align: top;
`;

const BadgeContainer = styled.div`
  margin-left: 0px;
  margin-right: -8px;
  display: inline-block;
  vertical-align: top;
`;

const IconContainer = styled.div`
  display: inline-block;
  height: 24px;
  margin-left: 0px;
  margin-right: 8px;
  width: 24px;
`;

const RenderIf = ({ conditional, children }) => conditional && children;

class TabbedView extends React.Component {
  static Tab = Tab;

  constructor(props) {
    super(props);

    const { children, activeTab } = props;

    if (activeTab) {
      this.state = { activeTab };
    } else {
      const [
        {
          props: { title },
        },
      ] = React.Children.toArray(children);
      this.state = { activeTab: title };
    }
  }

  onTabClick = tab => {
    this.setState({ activeTab: tab });
  };

  sanitize = str =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(' ', '-')
      .toLowerCase();

  render() {
    const { children, skin, theme, fluid } = this.props;
    const { activeTab } = this.state;

    return (
      <>
        <Navbar theme={theme} skin={skin}>
          {React.Children.map(children, ({ props: { title, badge, icon } }) => (
            <NavItem
              fluid={fluid}
              key={title}
              onClick={() => this.onTabClick(title)}
              skin={skin}
              theme={theme}
              id={`${this.sanitize(title)}-tab`}
              aria-controls={`${this.sanitize(title)}-panel`}
              aria-selected={title === activeTab}
            >
              {icon ? <IconContainer>{icon}</IconContainer> : null}
              {title ? <TitleContainer>{title}</TitleContainer> : null}
              {badge ? <BadgeContainer>{badge}</BadgeContainer> : null}
            </NavItem>
          ))}
        </Navbar>

        {React.Children.map(
          children,
          ({ props: { title, children: tabContent } }) => (
            <RenderIf conditional={title === activeTab}>
              <div
                role="tabpanel"
                id={`${this.sanitize(title)}-panel`}
                aria-labelledby={`${this.sanitize(title)}-tab`}
              >
                {tabContent}
              </div>
            </RenderIf>
          ),
        )}
      </>
    );
  }
}

TabbedView.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activeTab: PropTypes.string,
  skin: PropTypes.oneOf(['neutral', 'primary']),
  theme: PropTypes.shape({
    components: PropTypes.shape({
      tabbedView: PropTypes.object,
    }),
    baseFontSize: PropTypes.number,
    breakpoints: PropTypes.array,
  }),
};

TabbedView.defaultProps = {
  fluid: false,
  activeTab: undefined,
  skin: 'neutral',
  theme: {
    components,
    baseFontSize: defaultBaseFontSize,
    breakpoints: defaultBreakpoints,
  },
};

TabbedView.displayName = 'TabbedView';

export default TabbedView;
