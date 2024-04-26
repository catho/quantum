import styled from 'styled-components';
import Card from '../../Card';

const propsNotContainedInTheCard = ['theme'];

const Title = styled(Card.Title).withConfig({
  shouldForwardProp: (prop) => !propsNotContainedInTheCard.includes(prop),
})`
  font-weight: 700;
  line-height: 1.25;
`;

export default Title;
