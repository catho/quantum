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

const skin = props => {
  const {
    unselected,
    selected,
    disabled,
    focused,
    hovered,
    decoration,
    borderRadius,
  } = skins(props);

  return `${`
    background-color: ${
      props.disabled ? disabled.background : unselected.background
    };
    border: 1.5px solid ${props.disabled ? disabled.border : unselected.border};

    box-shadow: ${props.disabled ? disabled.shadow : unselected.shadow};

    color: ${props.disabled ? disabled.color : unselected.color};

    ${decoration ? `text-decoration: ${decoration};` : ''}
    ${borderRadius ? `border-radius: ${borderRadius};` : ''}
  `}

    ${
      !props.disabled
        ? `
      &:hover {
        box-shadow: ${hovered.shadow};
        background-color: ${hovered.background};
        border-color: ${hovered.border};
        color: ${hovered.color};
      }
    `
        : ''
    }

    &:focus {
      box-shadow: ${focused.shadow};
      background-color: ${focused.background};
      border-color: ${focused.border};
      color: ${focused.color};
    }

    &:active {
      box-shadow: ${selected.shadow};
      background-color: ${selected.background};
      border-color: ${selected.border};
      color: ${selected.color};
    }
  `;
};

export default css`
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

  ${skin}
`;
