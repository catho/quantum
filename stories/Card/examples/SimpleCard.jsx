import Card from '../../../components/Card';

const SimpleCard = (props) => (
  <Card {...props}>
    <Card.Content>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui semper
      molestie vitae in sapien. In a odio quis nisi placerat varius eget et
      magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Content>
  </Card>
);

SimpleCard.code = `import Card from '@catho/quantum/Card';

const SimpleCard = () => (
  <Card>
    <Card.Content>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui
      semper molestie vitae in sapien. In a odio quis nisi placerat varius
      eget et magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Content>
</Card>
);`;

export default SimpleCard;
