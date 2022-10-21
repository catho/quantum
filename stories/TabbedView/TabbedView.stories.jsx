import { TabbedView, Tab, Icon, Badge } from '../../components';

const itemsMock = [
  { title: 'Candidates', content: 'Candidates content' },
  { title: 'Companies', content: 'Companies content' },
  { title: 'Education', content: 'Education content' },
];

const itemsWithIconMock = [
  {
    title: 'Candidates',
    content: 'Candidates content',
    icon: <Icon name="star" />,
  },
  {
    title: 'Companies',
    content: 'Companies content',
    badge: <Badge number={4} />,
  },
  {
    title: 'Education',
    content: 'Education content',
    badge: <Badge number={4} />,
    icon: <Icon name="star" />,
  },
];

const Template = args => {
  const { items = itemsMock, ...rest } = args;

  return (
    <TabbedView {...rest}>
      {items.map(({ title, content, ...itemRest }) => (
        <Tab key={title} title={title} {...itemRest}>
          {content}
        </Tab>
      ))}
    </TabbedView>
  );
};

export const Default = Template.bind({});

export const WithFluid = Template.bind({});
WithFluid.args = {
  fluid: true,
};

export const WithSkin = Template.bind({});
WithSkin.args = {
  skin: 'primary',
};

export const ActiveTab = Template.bind({});
ActiveTab.args = {
  activeTab: 'Companies',
};

export const WithIconAndBadge = Template.bind({});
WithIconAndBadge.args = {
  skin: 'primary',
  items: itemsWithIconMock,
};
