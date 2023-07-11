import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  components,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const getColors = ({
  skin,
  theme: {
    components: {
      badge: {
        skins: { [skin]: badgeColor },
      },
    },
  },
  inverted,
}) => {
  if (inverted) {
    const [text, background] = [badgeColor.background, badgeColor.text];
    return css`
      background-color: ${background};
      color: ${text};
    `;
  }
  return css`
    background-color: ${badgeColor.background};
    color: ${badgeColor.text};
  `;
};

const BadgeWrapper = styled.div`
  display: inline-block;

  ${props =>
    props.originalChildren
      ? `position: relative;`
      : `margin-left: 8px; margin-right: 8px;`}
`;

const StyledBadge = styled.span`
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  font-weight: bold;
  height: 24px;
  line-height: 24px;
  min-width: 32px;
  align-items: center;
  justify-content: center;

  ${({
    value,
    theme: {
      spacing: { xxxsmall, xxsmall },
      baseFontSize,
    },
    number,
  }) => {
    const padding =
      !Number.isInteger(value) || number >= 10 ? xxsmall : xxxsmall;

    return `
        font-size: ${baseFontSize * 0.75}px;
        padding-left: ${padding}px;
        padding-right: ${padding}px;
      `;
  }}

  ${props =>
    props.originalChildren &&
    `
    position: absolute;
    right: -10px;
    top: -10px;
  `}

  ${props =>
    props.dot &&
    `
    right: -2px;
    top: 0;
    height: 12px;
    width: 12px;
    min-width: 12px;
  `}

  ${getColors}
`;

/** This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead */
const Badge = ({ children, number, skin, inverted, dot, theme }) => {
  const value = number > 99 ? '99+' : number;

  return (
    <BadgeWrapper value={value} originalChildren={children}>
      <StyledBadge
        skin={skin}
        inverted={inverted}
        theme={theme}
        value={value}
        originalChildren={children}
        dot={dot}
      >
        {dot || value}
      </StyledBadge>
      {children}
    </BadgeWrapper>
  );
};

BadgeWrapper.displayName = 'BadgeWrapper';
StyledBadge.displayName = 'StyledBadge';
Badge.displayName = 'Badge';

Badge.propTypes = {
  /** Set background and text colors */
  skin: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'neutral',
  ]),
  /** When passed a children to &lt;Badge /&gt;, the badge will be displayed at top-right corner of the children. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /** Number to be displayed inside badge. When number is bigger than 99, it will show "99+" instead of the exact number. */
  number: PropTypes.number,
  /** Swap background and text colors. */
  inverted: PropTypes.bool,
  /** Shows only a dot, without any number. */
  dot: PropTypes.bool,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
    components: PropTypes.shape({
      badge: PropTypes.object,
    }),
  }),
};

Badge.defaultProps = {
  skin: 'neutral',
  inverted: false,
  children: '',
  number: 0,
  dot: false,
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    components: {
      badge: components.badge,
    },
  },
};

export default Badge;
