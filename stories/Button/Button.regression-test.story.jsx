import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../components/Button';
import SocialButton from '../../components/SocialButton';

storiesOf('Buttons', module)
  .add('primary default', () => <Button>Catho</Button>)
  .add('primary disabled', () => <Button disabled>Catho</Button>)
  .add('primary stroked', () => <Button stroked>Catho</Button>)

  .add('primary full', () => <Button full>Catho</Button>)
  .add('primary icon info', () => <Button icon="info">Catho</Button>)
  .add('primary size xsmall', () => <Button size="xsmall">Catho</Button>)
  .add('primary size small', () => <Button size="small">Catho</Button>)
  .add('primary size large', () => <Button size="large">Catho</Button>)
  .add('primary size xlarge', () => <Button size="xlarge">Catho</Button>)

  .add('secondary default', () => <Button skin="secondary">Catho</Button>)
  .add('secondary disabled', () => (
    <Button skin="secondary" disabled>
      Catho
    </Button>
  ))
  .add('secondary stroked', () => (
    <Button skin="secondary" stroked>
      Catho
    </Button>
  ))

  .add('neutral default', () => <Button skin="neutral">Catho</Button>)
  .add('neutral disabled', () => (
    <Button skin="neutral" disabled>
      Catho
    </Button>
  ))
  .add('neutral stroked', () => (
    <Button skin="neutral" stroked>
      Catho
    </Button>
  ))

  .add('success default', () => <Button skin="success">Catho</Button>)
  .add('success disabled', () => (
    <Button skin="success" disabled>
      Catho
    </Button>
  ))
  .add('success stroked', () => (
    <Button skin="success" stroked>
      Catho
    </Button>
  ))

  .add('warning default', () => <Button skin="warning">Catho</Button>)
  .add('warning disabled', () => (
    <Button skin="warning" disabled>
      Catho
    </Button>
  ))
  .add('warning stroked', () => (
    <Button skin="warning" stroked>
      Catho
    </Button>
  ))

  .add('error default', () => <Button skin="error">Catho</Button>)
  .add('error disabled', () => (
    <Button skin="error" disabled>
      Catho
    </Button>
  ))
  .add('error stroked', () => (
    <Button skin="error" stroked>
      Catho
    </Button>
  ));

storiesOf('SocialButtons', module)
  .add('provider google', () => (
    <SocialButton provider="google" title="google-btn" />
  ))
  .add('provider facebook', () => (
    <SocialButton provider="facebook" title="facebook-btn" />
  ));
