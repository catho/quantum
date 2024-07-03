import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const Header = styled(Card.Header).attrs(({ theme, ...rest }) => ({
  theme: { spacing, ...theme },
  ...rest,
}))`
  padding: ${({
    theme: {
      spacing: { medium },
    },
  }) => `${medium}px ${medium}px 0`};
`;

Header.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

export default Header;
