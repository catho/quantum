import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const propsNotContainedInTheCard = ['theme'];

const Header = styled(Card.Header).withConfig({
  shouldForwardProp: (prop) => !propsNotContainedInTheCard.includes(prop),
})`
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

Header.defaultProps = {
  theme: { spacing },
};

export default Header;
