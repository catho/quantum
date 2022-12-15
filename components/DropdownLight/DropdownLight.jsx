import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, spacing, baseFontSize } from '../shared/theme';

const itemPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
]);

const DropList = styled.select`
  width: 100%;
  height: 44px;

  ${({ theme }) => {
    const { baseFontSize: baseFontSizeDropList } = theme;

    return css`
      font-size: ${baseFontSizeDropList}px;
    `;
  }}
`;

const DropdownLight = ({ disabled, items, theme }) => (
  <>
    <DropList disabled={disabled} theme={theme}>
      {items.map(item => (
        <option key={items.value}>{item.label}</option>
      ))}
    </DropList>
  </>
);

DropdownLight.propTypes = {
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(itemPropType),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

DropdownLight.defaultProps = {
  disabled: false,
  items: [],
  theme: { colors, spacing, baseFontSize },
};

export default DropdownLight;
