import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const Content = styled(Card.Content).attrs(({ theme, ...rest }) => ({
  theme: { spacing, ...theme },
  ...rest,
}))`
  font-size: 16px;
  max-height: 70vh;
  overflow-y: auto;
  padding: ${({
    theme: {
      spacing: { medium },
    },
  }) => `${medium}px`};
`;

Content.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

export default Content;
