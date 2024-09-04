import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputErrorMessage from './InputErrorMessage';
import { colors, spacing } from '../../shared/theme';

const HelperText = styled(InputErrorMessage).attrs(({ theme, ...rest }) => ({
  theme: { colors, spacing, ...theme },
  ...rest,
}))`
  color: inherit;
`;

HelperText.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default HelperText;
