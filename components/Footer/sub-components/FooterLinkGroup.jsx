import React from 'react';
import styled, { css } from 'styled-components';
import dataPropTypes from './shared/data-prop-types';

const SharedStyle = css`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.theme.linkfontSize};
`;

const LinkGroup = styled.ul`
  border-right: ${props => (props.sideSeparator ? `1px solid ${props.theme.borderColor}` : 'none')};
  min-height: ${props => (props.sideSeparator ? '135px' : '0px')};
  margin: 0 0px 20px ${props => (props.firstItemTitle ? '20px' : '0px')};
  padding: 0px 0px 0px 0px;
  list-style-type: none;
  li:first-child{
    list-style-type: ${props => (props.firstItemTitle ? 'initial' : 'none')};
  }
`;
const LinkItem = styled.li`
  ${SharedStyle}
  float: ${props => (props.isLinkImg ? 'left' : 'initial')};
  &.hidden {
    display: none;
  }
  &.title {
    ${SharedStyle}
    clear: both;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 10px;
  }
  a, button {
    font-size: ${props => props.theme.linkFontSize};
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;

    &:hover{
      text-decoration: ${props => (props.href ? 'underline' : 'none')};
      cursor: ${props => (props.href ? 'pointer' : 'default')};
    }
  }
`;

class FooterLinkGroup extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      openedPartners: false,
    };
  }

  handleClick = () => {
    this.setState({
      openedPartners: !this.state.openedPartners,
    });
  }

  render() {
    return (
      <LinkGroup sideSeparator={this.data.sideSeparator} firstItemTitle={this.data.links[0].title}>
        {
          this.data.links.map(link => (
            <LinkItem
              key={link.id}
              href={link.href}
              isLinkImg={link.img != null}
              className={link.title ? 'title' : ''}
            >
              {
                link.collapsedLinkGroup &&
                <LinkGroup>
                  {link.collapsedLinkGroup && link.collapsedLinkGroup.map(collapsedlink => (
                    <LinkItem
                      key={collapsedlink.id}
                      href={collapsedlink.href}
                      className={this.state.openedPartners ? '' : 'hidden'}
                    >
                      <a href={collapsedlink.href} target={collapsedlink.target}>
                        { collapsedlink.text }
                      </a>
                    </LinkItem>
                    ))}
                </LinkGroup>
              }

              {link.collapsedLinkGroup &&
                <button onClick={this.handleClick}>Ver mais</button>
              }

              {!link.collapsedLinkGroup &&
                <a href={link.href}>
                  {
                    (link.img) != null &&
                    <img
                      alt={link.text}
                      src={`${process.env.APPLICATION_PATH}/static/${link.img.src}`}
                      width={link.img.width}
                    />
                  }

                  { !(link.img) != null && link.text }
                </a>
              }
            </LinkItem>
          ))
        }
      </LinkGroup>
    );
  }
}

FooterLinkGroup.propTypes = dataPropTypes;
FooterLinkGroup.defaultProps = { data: null };

export default FooterLinkGroup;
