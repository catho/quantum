import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import AutoExample from '../../.storybook/components/AutoExample';
import { Tab } from '../../.storybook/components/TabbedView';
import Tooltip from '../../components/Tooltip';
import Logo from '../../components/Logo';

const TipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 110px);
  margin: 0 15px;
`;

const tabExample = (
  <Tab title="Example">
    <h3>Skins</h3>
    <TipGrid>
      <div>
        <Tooltip skin="info">Info</Tooltip>
      </div>
      <div>
        <Tooltip skin="danger">Danger</Tooltip>
      </div>
      <div>
        <Tooltip skin="success">Success</Tooltip>
      </div>
      <div>
        <Tooltip skin="warning">Warning</Tooltip>
      </div>
    </TipGrid>

    <h3>Placement</h3>
    <TipGrid>
      <div>
        <Tooltip place="top">Top</Tooltip>
      </div>
      <div>
        <Tooltip place="right">Right</Tooltip>
      </div>
      <div>
        <Tooltip place="bottom">Bottom</Tooltip>
      </div>
      <div>
        <Tooltip place="left">Left</Tooltip>
      </div>
    </TipGrid>

    <h3>Others</h3>
    <TipGrid>
      <div>
        <Tooltip text="Catho Empresas">
          <Logo.Business />
        </Tooltip>
      </div>
      <div>
        <Tooltip place="right" text="Catho">
          <Logo />
        </Tooltip>
      </div>
      <div>
        <Tooltip place="bottom" text="Catho Educação">
          <Logo.Education />
        </Tooltip>
      </div>
    </TipGrid>
  </Tab>
);

storiesOf('8. Tooltip', module).add('Basic', () => (
  <AutoExample
    component={Tooltip}
    additionalTabs={tabExample}
    componentProps={{
      children: 'Hover me',
    }}
  />
));
