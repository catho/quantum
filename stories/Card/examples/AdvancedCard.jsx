import React from 'react';
import Colors from '../../../components/Colors';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

const AdvancedCard = () => (
  <>
    <Card>
      <Card.Header>
        <Card.Thumbnail src="http://i.pravatar.cc/72" alt="Avatar" />
        <Card.HeaderText>
          <Card.Title small>Title</Card.Title>
          <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
        </Card.HeaderText>
      </Card.Header>
      <Card.Media src="http://placekitten.com/g/800" alt="A beautiful Cat" />
      <Card.Content>
        Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
        metus elit. In hac habitasse platea dictumst. Fusce non purus a dui
        semper molestie vitae in sapien. In a odio quis nisi placerat varius
        eget et magna. Donec nec cursus mauris. Donec a cursus velit.
      </Card.Content>
      <Card.Footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Button size="small" skin="secondary">
            See more
          </Button>
        </div>
        <div>
          <Icon skin={Colors.BLACK['400']} name="favorite" />
          <Icon skin={Colors.BLACK['400']} name="share" />
        </div>
      </Card.Footer>
    </Card>
  </>
);

AdvancedCard.code = `import {
  Colors,
  Card,
  Button,
  Icon
} from '@catho/quantum';

const AdvancedCard = () => (
  <>
  <Card>
    <Card.Header>
      <Card.Thumbnail src="http://i.pravatar.cc/72" alt="Avatar" />
      <Card.HeaderText>
        <Card.Title small>Title</Card.Title>
        <Card.Description>Lorem ipsum dolor sit amet.</Card.Description>
      </Card.HeaderText>
    </Card.Header>
    <Card.Media src="http://placekitten.com/g/800" alt="A beautiful Cat" />
    <Card.Content>
      Duis ac enim non leo dapibus placerat ut vel ligula. Pellentesque sed
      metus elit. In hac habitasse platea dictumst. Fusce non purus a dui
      semper molestie vitae in sapien. In a odio quis nisi placerat varius
      eget et magna. Donec nec cursus mauris. Donec a cursus velit.
    </Card.Content>
    <Card.Footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Button size="small" skin="secondary">
          See more
        </Button>
      </div>
      <div>
        <Icon skin={Colors.BLACK['400']} name="favorite" />
        <Icon skin={Colors.BLACK['400']} name="share" />
      </div>
    </Card.Footer>
  </Card>
  </>
);`;

export default AdvancedCard;
