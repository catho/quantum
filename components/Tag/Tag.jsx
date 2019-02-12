import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Icon from '../Icon';

const skinFontColors = {
  inverted: Colors.WHITE,
  blue: Colors.BLUE[500],
  success: Colors.SUCCESS[900],
  warning: Colors.WARNING[900],
  error: Colors.ERROR[900],
  'blue-text': Colors.BLUE[500],
};

const skins = {
  default: `background-color: ${Colors.BLACK[100]};`,
  stroked: `
    border: 1px solid;
    background: none;
  `,
  inverted: `
    color: ${skinFontColors.inverted}
    background-color: ${Colors.BLACK[400]};
  `,
  blue: `
    color: ${skinFontColors.blue}
    background-color: ${Colors.BLUE[200]};
  `,
  success: `
    color: ${skinFontColors.success}
    background-color: ${Colors.SUCCESS[200]};
  `,
  warning: `
    color: ${skinFontColors.warning}
    background-color: ${Colors.WARNING[200]};
  `,
  error: `
    color: ${skinFontColors.error}
    background-color: ${Colors.ERROR[200]};
  `,
  'blue-text': `
    color: ${skinFontColors['blue-text']}
    background-color: ${Colors.BLACK[100]};
  `,
};

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 4px 12px;
  box-sizing: border-box;
  height: 32px;
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ skin }) => skins[skin]}
  ${({ closable }) =>
    closable &&
    `
    display: flex;
    align-items: center;
  `}
`;

const ResetedButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 18px;
  padding: 0;
  margin-left: 4px;
`;

const SmallIcon = styled(Icon)`
  font-size: 18px !important;
`;

class Tag extends Component {
  constructor(props) {
    super(props);

    this.state = { hidden: false };

    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({ hidden: true });
  }

  render() {
    const { hidden } = this.state;
    const { children, text, closable, skin, bold } = this.props;

    if (hidden) return '';

    return (
      <Wrapper closable={closable} skin={skin} bold={bold}>
        {children || text}
        {closable && (
          <ResetedButton onClick={this.hide}>
            <SmallIcon name="close" skin={skinFontColors[skin]} />
          </ResetedButton>
        )}
      </Wrapper>
    );
  }
}

Tag.propTypes = {
  skin: PropTypes.oneOf([
    'default',
    'stroked',
    'inverted',
    'blue',
    'success',
    'warning',
    'error',
    'blue-text',
  ]),
  children: PropTypes.string,
  text: PropTypes.string,
  bold: PropTypes.bool,
  closable: PropTypes.bool,
};

Tag.defaultProps = {
  skin: 'default',
  text: 'Tag text',
  bold: false,
  children: '',
  closable: false,
};

export default Tag;
