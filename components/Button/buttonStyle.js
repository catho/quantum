import { css } from 'styled-components';
import skins from './skins';

const fontSize = ({ size }) => {
  const sizes = {
    xsmall: '12px',
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  };
  return `font-size: ${sizes[size] || sizes.medium};`;
};

const padding = ({ size }) => {
  const paddings = {
    xsmall: '0 12px',
    small: '0 12px',
    medium: '0 16px',
    large: '0 16px',
    xlarge: '0 16px',
  };

  return `padding: ${paddings[size] || paddings.medium};`;
};

const height = ({ size }) => {
  const heights = {
    xsmall: '24px',
    small: '32px',
    medium: '40px',
    large: '48px',
    xlarge: '56px',
  };

  return `height: ${heights[size] || heights.medium};`;
};

const _interactiveStyle = (props, skinProp) => {
  const {
    [skinProp]: { shadow, background, border, color },
  } = skins(props);
  const { disabled } = props;

  return !disabled
    ? `
    box-shadow: ${shadow};
    background-color: ${background};
    border-color: ${border};
    color: ${color};
  `
    : '';
};

const hover = props => _interactiveStyle(props, 'hovered');
const focus = props => _interactiveStyle(props, 'focused');
const active = props => _interactiveStyle(props, 'selected');

const skin = props => {
  const { unselected, disabled, decoration, borderRadius } = skins(props);

  return css`
    background-color: ${props.disabled
      ? disabled.background
      : unselected.background};
    border: 1.5px solid ${props.disabled ? disabled.border : unselected.border};

    box-shadow: ${props.disabled ? disabled.shadow : unselected.shadow};

    color: ${props.disabled ? disabled.color : unselected.color};

    ${decoration ? `text-decoration: ${decoration};` : ''}
    ${borderRadius ? `border-radius: ${borderRadius};` : ''}
  `;
};

const DEFAULT_STYLE = css`
  align-items: center;
  ${props => `cursor: ${props.disabled ? 'not-allowed' : 'pointer'};`}
  display: flex;
  ${fontSize}
  font-weight: bold;
  ${height}
  justify-content: center;
  ${padding}
  letter-spacing: 0.2px;

  ${props =>
    props.center &&
    `
    margin-left: auto;
    margin-right: auto;
  `}

  *:nth-child(2) {
    margin-left: 5px;
  }

  transition: all 0.2s ease-in-out;

  ${props => props.full && `width: 100%;`}
`;

const SKIN_STYLE = css`
  ${skin}
`;
const HOVER_STYLE = css`
  ${hover}
`;
const FOCUS_STYLE = css`
  ${focus}
`;
const ACTIVE_STYLE = css`
  ${active}
`;

const BUTTON_STYLE = css`
  ${DEFAULT_STYLE}
  ${SKIN_STYLE}

  :hover {
    ${HOVER_STYLE}
  }

  :focus {
    ${FOCUS_STYLE}
  }

  :active {
    ${ACTIVE_STYLE}
  }
`;

export {
  DEFAULT_STYLE,
  SKIN_STYLE,
  HOVER_STYLE,
  FOCUS_STYLE,
  ACTIVE_STYLE,
  BUTTON_STYLE as default,
};
