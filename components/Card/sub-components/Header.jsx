import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from '../../shared/theme';

const Header = styled.header`
  display: flex;

  ${({
    theme: {
      spacing: { medium },
    },
  }) => `
    padding: ${medium}px ${medium}px 0;

    > * {
      margin-right: ${medium}px;
    }

    > *:last-child {
      margin-right: 0;
    }
  `}
`;

Header.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

Header.defaultProps = {
  theme: {
    spacing,
  },
};

Header.displayName = 'Card.Header';

export default Header;
