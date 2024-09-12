import { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  components,
  baseFontSize as defaultBaseFontSize,
  breakpoints as defaultBreakpoints,
  spacing as defaultSpacing,
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
  padding: 0;
  max-width: 100%;
  clear: left;
  float: left;

  ${({
    skin,
    theme: {
      components: {
        tabbedView: { skins },
      },
      breakpoints,
      spacing: { large },
    },
    fluid,
  }) => {
    const { background } = getSkinByThemeColor(skin, skins);
    const mediumQuery = query(breakpoints).medium;

    return css`
      background-color: ${background};
      margin: 0 0 ${large}px 0;

      ${fluid ? 'width: 100%; overflow-x: scroll;' : null}

      ${mediumQuery`
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
  line-height: 1.5;
  min-width: 90px;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({
    skin,
    quantityOfItems,
    theme: {
      components: {
        tabbedView: { skins },
      },
      baseFontSize,
      spacing: { medium },
    },
    fluid,
  }) => {
    const { background, text, activeText, hoverBackground, border } =
      getSkinByThemeColor(skin, skins);
    return css`
      border-bottom: 1px solid ${border};
      background-color: ${background};
      font-size: ${baseFontSize}px;
      color: ${text};
      padding: ${medium}px;

      ${fluid
        ? `
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: ${(100 / quantityOfItems).toFixed(2)}%;
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

      &:focus {
        color: ${activeText};
        border: 1px solid ${activeText};
        background-color: ${hoverBackground};
        padding: ${medium - 1}px;
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

const TabPanel = styled.div`
  clear: left;
`;

const RenderIf = ({ conditional, children }) => conditional && children;

function TabbedView({
  children,
  activeTab = undefined,
  skin = 'neutral',
  theme = {
    components,
    baseFontSize: defaultBaseFontSize,
    breakpoints: defaultBreakpoints,
    spacing: defaultSpacing,
  },
  fluid = false,
  onTabClick = () => {},
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const tabTitles = Children.toArray(children).map((tab) => tab.props.title);
  function setDefaultTab() {
    setCurrentTab(tabTitles[0]);
  }

  useEffect(() => {
    if (tabTitles.includes(activeTab)) {
      setCurrentTab(activeTab);
    } else {
      setDefaultTab();
    }
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    onTabClick(tab);
  };

  const sanitize = (str) =>
    str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(' ', '-')
      .toLowerCase();

  return (
    <>
      <Navbar theme={theme} skin={skin} fluid={fluid}>
        {Children.map(children, ({ props: { title, badge, icon } }) => (
          <NavItem
            fluid={fluid}
            quantityOfItems={Children.count(children)}
            key={title}
            onClick={() => handleTabClick(title)}
            skin={skin}
            theme={theme}
            id={`${sanitize(title)}-tab`}
            aria-controls={`${sanitize(title)}-panel`}
            aria-selected={title === currentTab}
          >
            {icon && <IconContainer>{icon}</IconContainer>}
            {title && <TitleContainer>{title}</TitleContainer>}
            {badge && <BadgeContainer>{badge}</BadgeContainer>}
          </NavItem>
        ))}
      </Navbar>

      {Children.map(children, ({ props: { title, children: tabContent } }) => (
        <RenderIf conditional={title === currentTab}>
          <TabPanel
            role="tabpanel"
            key={`${sanitize(title)}-panel-key`}
            id={`${sanitize(title)}-panel`}
            aria-labelledby={`${sanitize(title)}-tab`}
          >
            {tabContent}
          </TabPanel>
        </RenderIf>
      ))}
    </>
  );
}

TabbedView.Tab = Tab;

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
    breakpoints: PropTypes.object,
    spacing: PropTypes.object,
  }),
  onTabClick: PropTypes.func,
};

TabbedView.displayName = 'TabbedView';

export default TabbedView;
