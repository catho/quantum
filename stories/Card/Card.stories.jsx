import Card from '../../components/Card';
import Table from '../shared/Table';

const componentsList = [
  {
    component: '<Card/>',
    description:
      "Card wrapper, it's the root element of card component. Hold all card elements, and their size is determined by the space those elements occupy.",
  },
  {
    component: '<Card.Header/>',
    description: "It's envolve the card header components.",
  },
  {
    component: '<Card.HeaderText/>',
    description: "It's envolve the Card.Title and Card.Description components.",
  },
  { component: '<Card.Title/>', description: 'The main title.' },
  {
    component: '<Card.Description/>',
    description: 'Cards can display a little explanation.',
  },
  {
    component: '<Card.Thumbnail/>',
    description: 'Display an image, avatar, or logo.',
  },
  {
    component: '<Card.Media/>',
    description:
      'Cards can include a variety of media, including images, photos, graphics, and so on.',
  },
  {
    component: '<Card.Content/>',
    description:
      'The main content, can include, for example, a job description or a resume information.',
  },
  {
    component: '<Card.Footer/>',
    description:
      'Footer is provided for include actions buttons, icons, any kind of user interaction.',
  },
];

export const CompoundComponentsList = () => (
  <Table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {componentsList.map(row => (
        <tr key={row.component}>
          {Object.keys(row).map(key => (
            <td key={row[key]}>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

const Template = args => {
  const {
    children: Component = 'Lorem ipsum dolor sit amet...',
    ...rest
  } = args;
  return <Card {...rest}>{Component}</Card>;
};

const AdvancedCardTemplate = args => (
  <Card {...args}>
    <Card.Header>
      <Card.Thumbnail
        src="https://assets.catho.com.br/quantum/card/thumb-72x72.png"
        alt="Avatar"
      />
      <Card.HeaderText>
        <Card.Title small>Title</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
      </Card.HeaderText>
    </Card.Header>
    <Card.Media
      src="https://assets.catho.com.br/quantum/card/thumb-800x800.png"
      alt="A beautiful Cat"
    />
    <Card.Content>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper
      molestie vitae in sapien. In a odio quis nisi placerat varius eget et
      magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Content>
    <Card.Footer>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper
      molestie vitae in sapien. In a odio quis nisi placerat varius eget et
      magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Footer>
  </Card>
);

export const Default = Template.bind({});

export const AdvancedCard = AdvancedCardTemplate.bind({});
