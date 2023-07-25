import Carousel from '../../components/Carousel';
import {
  content,
  contentWithLongTexts,
} from '../../test-utils/mocks/Carousel/Content';

export default {
  title: 'Carousel',
  component: Carousel,
};

const Template = args => {
  const { cards = content, ...rest } = args;
  return <Carousel cards={cards} {...rest} />;
};

export const Default = Template.bind({});

export const WithSmallCards = Template.bind({});
WithSmallCards.args = {
  cardSize: 'small',
};

export const WithLargeCards = Template.bind({});
WithLargeCards.args = {
  cardSize: 'large',
};

export const WithEllipsisForLongTexts = Template.bind({});
WithEllipsisForLongTexts.args = {
  cards: contentWithLongTexts,
};
