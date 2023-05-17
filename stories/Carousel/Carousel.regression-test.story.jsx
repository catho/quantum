import Carousel from '../../components/Carousel';
import {
  content,
  contentWithLongTexts,
} from '../../test-utils/mocks/Carousel/Content';

export default {
  title: 'Carousel',
  component: Carousel,
};

const Template = args => <Carousel cards={content} {...args} />;
const TemplateWithLongText = args => (
  <Carousel cards={contentWithLongTexts} {...args} />
);

export const SmallCards = Template.bind({});
SmallCards.args = {
  cardSize: 'small',
};

export const MediumCards = Template.bind({});
MediumCards.args = {
  cardSize: 'medium',
};

export const MediumCardsWithEllipsis = TemplateWithLongText.bind({});
MediumCardsWithEllipsis.args = {
  ...MediumCards.args,
};

export const MediumCardsWithoutDots = Template.bind({});
MediumCardsWithoutDots.args = {
  ...MediumCards.args,
  dotsPagination: false,
};

export const LargeCards = Template.bind({});
LargeCards.args = {
  cardSize: 'large',
};

export const LargeCardsWithEllipsis = TemplateWithLongText.bind({});
LargeCardsWithEllipsis.args = {
  ...LargeCards.args,
};
