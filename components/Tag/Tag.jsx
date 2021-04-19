import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../Icon';
import {
  colors,
  components,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const _colors = ({
  inverted,
  skin,
  stroked,
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
  background: inverted && !stroked ? text : background,
  text: inverted && !stroked ? background : text,
});

const wrapperColors = props => {
  const { background, text } = _colors(props);
  const {
    stroked,
    theme: {
      colors: { neutral },
    },
  } = props;

  return css`
    background-color: ${stroked ? neutral[0] : background};
    border: ${stroked ? `1px solid ${text}` : 'none'};
    color: ${text};
  `;
};

const wrapperSize = ({
  theme: {
    spacing: { xxsmall },
    baseFontSize,
  },
  size: propSize,
}) =>
  ({
    small: `
    font-size: ${baseFontSize * 0.75}px;
    padding-top: ${xxsmall}px;
    padding-bottom: ${xxsmall}px;
  `,
    large: `
    font-size: ${baseFontSize * 1.125}px;
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

const iconSize = ({ size, theme: { baseFontSize } }) =>
  ({
    small: `${baseFontSize * 0.875}px`,
    medium: `${baseFontSize * 1.125}px`,
    large: `${baseFontSize * 1.25}px`,
  }[size]);

const CloseIcon = styled(Icon)`
  width: ${defaultBaseFontSize * 1.125}px;
`;

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
    font-size: ${iconSize} !important;
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  inverted: PropTypes.bool,
  /** A callback that is called when close button is clicked */
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  skin: PropTypes.oneOf(['neutral', 'primary', 'success', 'warning', 'error']),
  stroked: PropTypes.bool,
  text: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    components: PropTypes.shape({
      tag: PropTypes.object,
    }),
    spacing: PropTypes.object,
  }),
};

Tag.defaultProps = {
  bold: false,
  inverted: false,
  stroked: false,
  text: 'Tag text',
  children: '',
  size: 'medium',
  skin: 'neutral',
  onClose: undefined,
  theme: {
    baseFontSize: defaultBaseFontSize,
    colors,
    components: {
      tag: components.tag,
    },
    spacing,
  },
};

export default Tag;
