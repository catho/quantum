import React from 'react';
import Button from '../../components/Button';

export default {
  title: 'Buttons',
};

export const PrimaryDefault = () => <Button>Catho</Button>;

PrimaryDefault.story = {
  name: 'primary default',
};

export const PrimaryDisabled = () => <Button disabled>Catho</Button>;

PrimaryDisabled.story = {
  name: 'primary disabled',
};

export const PrimaryStroked = () => <Button stroked>Catho</Button>;

PrimaryStroked.story = {
  name: 'primary stroked',
};

export const PrimaryFull = () => <Button full>Catho</Button>;

PrimaryFull.story = {
  name: 'primary full',
};

export const PrimaryIconInfo = () => <Button icon="info">Catho</Button>;

PrimaryIconInfo.story = {
  name: 'primary icon info',
};

export const PrimarySizeXsmall = () => <Button size="xsmall">Catho</Button>;

PrimarySizeXsmall.story = {
  name: 'primary size xsmall',
};

export const PrimarySizeSmall = () => <Button size="small">Catho</Button>;

PrimarySizeSmall.story = {
  name: 'primary size small',
};

export const PrimarySizeLarge = () => <Button size="large">Catho</Button>;

PrimarySizeLarge.story = {
  name: 'primary size large',
};

export const PrimarySizeXlarge = () => <Button size="xlarge">Catho</Button>;

PrimarySizeXlarge.story = {
  name: 'primary size xlarge',
};

export const SecondaryDefault = () => <Button skin="secondary">Catho</Button>;

SecondaryDefault.story = {
  name: 'secondary default',
};

export const SecondaryDisabled = () => (
  <Button skin="secondary" disabled>
    Catho
  </Button>
);

SecondaryDisabled.story = {
  name: 'secondary disabled',
};

export const SecondaryStroked = () => (
  <Button skin="secondary" stroked>
    Catho
  </Button>
);

SecondaryStroked.story = {
  name: 'secondary stroked',
};

export const NeutralDefault = () => <Button skin="neutral">Catho</Button>;

NeutralDefault.story = {
  name: 'neutral default',
};

export const NeutralDisabled = () => (
  <Button skin="neutral" disabled>
    Catho
  </Button>
);

NeutralDisabled.story = {
  name: 'neutral disabled',
};

export const NeutralStroked = () => (
  <Button skin="neutral" stroked>
    Catho
  </Button>
);

NeutralStroked.story = {
  name: 'neutral stroked',
};

export const SuccessDefault = () => <Button skin="success">Catho</Button>;

SuccessDefault.story = {
  name: 'success default',
};

export const SuccessDisabled = () => (
  <Button skin="success" disabled>
    Catho
  </Button>
);

SuccessDisabled.story = {
  name: 'success disabled',
};

export const SuccessStroked = () => (
  <Button skin="success" stroked>
    Catho
  </Button>
);

SuccessStroked.story = {
  name: 'success stroked',
};

export const WarningDefault = () => <Button skin="warning">Catho</Button>;

WarningDefault.story = {
  name: 'warning default',
};

export const WarningDisabled = () => (
  <Button skin="warning" disabled>
    Catho
  </Button>
);

WarningDisabled.story = {
  name: 'warning disabled',
};

export const WarningStroked = () => (
  <Button skin="warning" stroked>
    Catho
  </Button>
);

WarningStroked.story = {
  name: 'warning stroked',
};

export const ErrorDefault = () => <Button skin="error">Catho</Button>;

ErrorDefault.story = {
  name: 'error default',
};

export const ErrorDisabled = () => (
  <Button skin="error" disabled>
    Catho
  </Button>
);

ErrorDisabled.story = {
  name: 'error disabled',
};

export const ErrorStroked = () => (
  <Button skin="error" stroked>
    Catho
  </Button>
);

ErrorStroked.story = {
  name: 'error stroked',
};
