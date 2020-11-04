import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacing } from '../../shared/theme';

const Footer = styled.footer`
  padding: ${({
    theme: {
      spacing: { medium },
    },
  }) => `0 ${medium}px ${medium}px`};
`;

Footer.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

Footer.defaultProps = {
  theme: {
    spacing,
  },
};

Footer.displayName = 'Card.Footer';

export default Footer;
