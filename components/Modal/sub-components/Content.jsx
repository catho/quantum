import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const Content = styled(Card.Content)`
  font-size: 16px;
  max-height: 70vh;
  overflow-y: auto;
  padding: ${({
    theme: {
      spacing: { medium, large },
    },
  }) => `${medium}px ${large}px`};
`;

Content.propTypes = {
  theme: PropTypes.shape({
    spacing: PropTypes.object,
  }),
};

Content.defaultProps = {
  theme: { spacing },
};

export default Content;
