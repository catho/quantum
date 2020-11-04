import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../shared/theme';

const RequiredMark = styled.em`
  ${({
    theme: {
      colors: {
        error: { 500: error500 },
      },
    },
  }) => `color: ${error500};`}
`;

RequiredMark.propTypes = {
  theme: PropTypes.objectOf({
    colors: PropTypes.object,
  }),
};

RequiredMark.defaultProps = {
  theme: { colors },
};

export default RequiredMark;
