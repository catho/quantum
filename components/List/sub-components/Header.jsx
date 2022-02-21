import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing } from '../../shared/theme';

const Title = styled.span`
  ${({
    theme: {
      spacing: { xxsmall },
    },
  }) => `
  margin: ${xxsmall}px 0;
`}
`;

Title.displayName = 'Header';

const Header = ({ children, theme }) => <Title theme={theme}>{children}</Title>;

Header.defaultProps = {
  theme: {
    spacing,
  },
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

Header.displayName = 'List.Header';

export default Header;
