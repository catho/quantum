import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import LogoTypes from '../../components/Logo/LogoTypes';
import Heading from '../../.storybook/components/Heading';
import Atom from '../static/atom.svg';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import { Col, Row } from '../../components/Grid';
import GitlabLink from '../../.storybook/components/GitlabLink';

const StyledRow = styled(Row)`
  margin-bottom: 30px;
`;

const LogoExample = ({ name }) => {
  const Component = LogoTypes[name];
  return (
    <StyledRow key={`row-${name}`}>
      <Col phone={4}>
        <CodeExample
          code={`<Logo.${name} />`}
          showTitle={false}
        />
      </Col>
      <Col phone={4}>
        <Component />
      </Col>
    </StyledRow>
  );
};

storiesOf('7. Image', module)
  .add('Logo', () => {
    const logoList = Object.keys(LogoTypes);
    return (
      <Heading name="Logo" image={Atom}>
        <TabbedView>
          <Tab title="Usage">
            <HowToImport importModules="Logo" />
            <p>You can use these logos:</p>
            <ul>
              {logoList.map(name => <li key={name}>{name}</li>)}
            </ul>
            {logoList.map(name => (<LogoExample key={`example-${name}`} name={name} />))}
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