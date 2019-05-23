import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import { components } from '../shared/theme';

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

const _getColors = ({
  skin,
  theme: {
    components: {
      tag: {
        skins: {
          [skin]: { background, text },
        },
      },
    },
  },
}) => ({ background, text });

const getWrapperColors = props => {
  const { background, text } = _getColors(props);

  return css`
    background-color: ${background};
    color: ${text};
  `;
};

const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
  padding: 4px 12px;
  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ size }) => sizes[size]}
  ${getWrapperColors}
`;

const Content = styled.div`
  ${({ onClose }) =>
    onClose &&
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
    color: ${props => _getColors(props).text};
  }
`;

CloseButton.displayName = 'CloseButton';

const Tag = ({ children, text, onClose, ...rest }) => (
  <Wrapper {...rest}>
    <Content onClose={onClose}>
      {children || text}
      {onClose && (
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
  /** A callback that is called when close button is clicked */
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  text: PropTypes.string,
  theme: PropTypes.shape({
    components: {
      tag: PropTypes.object,
    },
  }),
};

Tag.defaultProps = {
  bold: false,
  children: '',
  onClose: undefined,
  size: 'medium',
  skin: 'neutral',
  text: 'Tag text',
  theme: {
    components: {
      tag: components.tag,
    },
  },
};

export default Tag;
