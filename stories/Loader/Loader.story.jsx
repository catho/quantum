import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Loader from '../../components/Loader';
import LoaderTypes from '../../components/Loader/LoaderTypes';
import Heading from '../../.storybook/components/Heading';
import Atom from '../static/atom.svg';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import HowToImport from '../../.storybook/components/HowToImport';
import CodeExample from '../../.storybook/components/CodeExample';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
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

storiesOf('12. Others', module)
  .add('Loader', () => (
    <Heading name="Loader" image={Atom}>
      <TabbedView>
        <Tab title="Usage">
          <HowToImport importModules="Loader" />
          <p>You can use these Loaders:</p>
          <ul>
            {loaderTypes.map(name => <li key={name}>{name}</li>)}
          </ul>

          <LoaderExample />

          {loaderTypes
            .map(type => <LoaderExample name={type} key={type} />)}

        </Tab>
        <Tab title="API">
          <AutoPropsApi component={Loader} />
        </Tab>
      </TabbedView>
    </Heading>
  ));
