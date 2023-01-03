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

const DropdownSelect = styled.select`
  width: 100%;
  height: 44px;

  ${({ theme }) => {
    const { baseFontSize: baseFontSizeDropdownSelect } = theme;

    return css`
      font-size: ${baseFontSizeDropdownSelect}px;
    `;
  }}
`;

const DropdownLight = ({ disabled, items, theme, placeholder }) => (
  <>
    <DropdownSelect disabled={disabled} theme={theme} defaultValue="">
      <option value="" hidden>
        {placeholder}
      </option>
      {items.map(item => (
        <option value={item?.value || item} key={item?.value || item}>
          {item?.label || item}
        </option>
      ))}
    </DropdownSelect>
  </>
);

DropdownLight.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(itemPropType).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

DropdownLight.defaultProps = {
  disabled: false,
  theme: { colors, spacing, baseFontSize },
  placeholder: 'Select an option',
};

export default DropdownLight;
