import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import { components, spacing } from '../shared/theme';

const _colors = ({
  skin,
  inverted,
  theme: {
    components: {
      tag: {
        skins: {
          [skin]: { background, text },
        },
      },
    },
  },
}) => ({
  background: inverted ? text : background,
  text: inverted ? background : text,
});

const wrapperColors = props => {
  const { background, text } = _colors(props);

  return css`
    background-color: ${background};
    color: ${text};
  `;
};

const wrapperSize = ({
  theme: {
    spacing: { xxsmall },
  },
  size: propSize,
}) =>
  ({
    small: `
    font-size: 12px;
    padding-top: ${xxsmall}px;
    padding-bottom: ${xxsmall}px;
  `,
    large: `
    font-size: 18px;
  `,
  }[propSize]);

const Wrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
  padding: 4px 12px;
  ${({ bold }) => bold && `font-weight: bold;`}
  ${wrapperColors}
  ${wrapperSize}
`;

const Content = styled.div`
  ${({ onClose }) =>
    onClose &&
    `
    display: flex;
    align-items: center;
  `}
`;

const iconSize = ({ size }) =>
  ({
    small: '14px',
    medium: '18px',
    large: '20px',
  }[size]);

const CloseIcon = styled(Icon)``;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: ${iconSize};
  padding: 0;
  ${({
    theme: {
      spacing: { xxsmall },
    },
  }) => `margin-left: ${xxsmall}px;`}

  ${CloseIcon} {
    font-size: ${iconSize};
    color: ${props => _colors(props).text};
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
  inverted: PropTypes.bool,
  /** A callback that is called when close button is clicked */
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  text: PropTypes.string,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    components: {
      tag: PropTypes.object,
    },
  }),
};

Tag.defaultProps = {
  bold: false,
  children: '',
  inverted: false,
  onClose: undefined,
  size: 'medium',
  skin: 'neutral',
  text: 'Tag text',
  theme: {
    spacing,
    components: {
      tag: components.tag,
    },
  },
};

export default Tag;
