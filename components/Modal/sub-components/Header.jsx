import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const Header = styled(Card.Header)`
  padding: ${({
    theme: {
      spacing: { large },
    },
  }) => `${large}px ${large}px 0`};
`;

Header.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

Header.defaultProps = {
  theme: { spacing },
};

export default Header;
