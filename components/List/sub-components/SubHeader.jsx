import PropTypes from 'prop-types';
import styled from 'styled-components';
import { baseFontSize } from '../../shared/theme';

const Description = styled.span`
  ${{
    theme: {
      baseFontSize,
    },
  }}
  font-size: ${baseFontSize * 0.75}px;
`;

Description.displayName = 'SubHeader';

const SubHeader = ({ children, theme }) => (
  <Description theme={theme}>{children}</Description>
);

SubHeader.defaultProps = {
  theme: {
    baseFontSize,
  },
};

SubHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
  }),
};

SubHeader.displayName = 'List.SubHeader';

export default SubHeader;
