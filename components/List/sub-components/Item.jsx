import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spacing, baseFontSize } from '../../shared/theme';
import Icon from '../../Icon';
import Content from './Content';

const ItemIcon = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    margin-right: ${xsmall}px;
  `}
`;

ItemIcon.displayName = 'ItemIcon';

const bulletValue = ({ bullet }) =>
  bullet &&
  css`
    &:before {
      content: '${bullet}';
    }
  `;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({
    theme: {
      spacing: { xxsmall },
    },
  }) => `
    padding: ${xxsmall}px;
  `}

  ${bulletValue};
`;

ListItem.displayName = 'ListItem';

class Item extends React.Component {
  static create = item => {
    if (typeof item === 'string') {
      return <Item content={item} key={item} />;
    }

    return <Item {...item} key={item.content} />;
  };

  _renderIcon = (icon, theme) => {
    if (typeof icon === 'string') {
      return <ItemIcon theme={theme} name={icon} />;
    }

    return <ItemIcon theme={theme} {...icon} />;
  };

  render() {
    const { icon, children, content, bullet, theme, ...rest } = this.props;

    return (
      <li {...rest}>
        <ListItem theme={theme} bullet={bullet}>
          {icon && this._renderIcon(icon, theme)}
          {children || <Content theme={theme} content={content} {...rest} />}
        </ListItem>
      </li>
    );
  }
}

Item.defaultProps = {
  icon: '',
  bullet: '',
  children: null,
  content: '',
  theme: {
    spacing,
    baseFontSize,
  },
};

Item.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      header: PropTypes.string,
      subheader: PropTypes.string,
    }),
  ]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  bullet: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Item.displayName = 'List.Item';

export default Item;
