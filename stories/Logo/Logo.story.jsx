import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Heading,
  TabbedView,
  Tab,
  HowToImport,
  CodeExample,
  AutoPropsApi,
} from '@catho/quantum-storybook-ui';

import Logo from '../../components/Logo';
import LogoTypes from '../../components/Logo/LogoTypes';
import { Col, Row } from '../../components/Grid';

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const LogoExample = ({ name }) => {
  const Component = LogoTypes[name];
  return (
    <StyledRow key={`row-${name}`}>
      <Col phone={4}>
        <CodeExample code={`<Logo.${name} />`} showTitle={false} />
      </Col>
      <Col phone={4}>
        <Component />
      </Col>
    </StyledRow>
  );
};

storiesOf('6. Images', module).add('Logo', () => {
  const logoList = Object.keys(LogoTypes);
  return (
    <Heading name="Logo">
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Logo" />
          <p>You can use these logos:</p>
          <ul>
            {logoList.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          {logoList.map(name => (
            <LogoExample key={`example-${name}`} name={name} />
          ))}
        </Tab>
        <Tab title="API">
          <AutoPropsApi component={Logo} ignoredProps={['src']} />
        </Tab>
      </TabbedView>
    </Heading>
  );
});

LogoExample.propTypes = {
  name: PropTypes.string.isRequired,
};
