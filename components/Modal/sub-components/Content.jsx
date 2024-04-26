import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../../Card';
import { spacing } from '../../shared/theme';

const propsNotContainedInTheCard = ['theme'];

const Content = styled(Card.Content).withConfig({
  shouldForwardProp: (prop) => !propsNotContainedInTheCard.includes(prop),
})`
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

Content.defaultProps = {
  theme: { spacing },
};

export default Content;
