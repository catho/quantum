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
import Loader from '../../components/Loader';
import LoaderTypes from '../../components/Loader/LoaderTypes';

import { Col, Row } from '../../components/Grid';

const LoaderExample = ({ name }) => {
  const Component = Loader[name] || Loader;
  const ExampleRow = styled(Row)`
    margin-bottom: 30px;
  `;

  return (
    <ExampleRow>
      <Col phone={4}>
        <CodeExample
          code={`<Loader${name ? `.${name}` : ''} />`}
          showTitle={false}
          component={Component}
        />
      </Col>
      <Col phone={4}>
        <Component />
      </Col>
    </ExampleRow>
  );
};

LoaderExample.defaultProps = { name: '' };
LoaderExample.propTypes = { name: PropTypes.string };

const loaderTypes = Object.keys(LoaderTypes);

storiesOf('13. Others', module).add('Loader', () => (
  <Heading name="Loader">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="Loader" />
        <p>You can use these Loaders:</p>
        <ul>
          {loaderTypes.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <LoaderExample />

        {loaderTypes.map(type => (
          <LoaderExample name={type} key={type} />
        ))}
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={Loader} />
      </Tab>
    </TabbedView>
  </Heading>
));
