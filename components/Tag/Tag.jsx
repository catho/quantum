import React from 'react';
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

const sizes = {
  small: `
    font-size: 12px;
    padding-top: 3px;
    padding-bottom: 3px;
  `,
  large: `
    font-size: 18px;
  `,
};

const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
  padding: 4px 12px;
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ skin }) => skins[skin]}
  ${({ size }) => sizes[size]}
`;

const Content = styled.div`
  ${({ closable }) =>
    closable &&
    `
    display: flex;
    align-items: center;
  `}
`;

const iconSizes = {
  small: '14px',
  medium: '18px',
  large: '20px',
};

const applyIconSize = ({ size }) => iconSizes[size];

const CloseIcon = styled(Icon)``;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: ${applyIconSize};
  margin-left: 4px;
  padding: 0;

  ${CloseIcon} {
    font-size: ${applyIconSize};
    color: ${({ skin }) => skinFontColors[skin]};
  }
`;

CloseButton.displayName = 'CloseButton';

const Tag = ({ children, text, closable, onClose, ...rest }) => (
  <Wrapper {...rest}>
    <Content closable={closable}>
      {children || text}
      {closable && (
        <CloseButton {...rest} onClick={onClose}>
          <CloseIcon name="close" />
        </CloseButton>
      )}
    </Content>
  </Wrapper>
);

Tag.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.string,
  closable: PropTypes.bool,
  /** A callback that is called when close button is clicked */
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  text: PropTypes.string,
};

Tag.defaultProps = {
  bold: false,
  children: '',
  closable: false,
  onClose: () => {},
  size: 'medium',
  skin: 'default',
  text: 'Tag text',
};

export default Tag;
