import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import {
  Heading,
  AutoPropsApi,
  HowToImport,
  CodeExample,
  TabbedView,
  Tab,
} from '@catho-private/quantum-storybook-ui';

import { Col, Row } from '../../components/Grid';
import List from '../../components/List';
import Item from '../../components/List/sub-components/Item';
import Content from '../../components/List/sub-components/Content';
import Header from '../../components/List/sub-components/Header';
import SubHeader from '../../components/List/sub-components/SubHeader';

import simpleList from './sub-components/simpleList';
import simpleListItemAlternatives from './sub-components/simpleListItemAlternatives';
import simpleListContent from './sub-components/simpleListContent';

const ListExample = ({ code, component }) => (
  <React.Fragment>
    <Col tablet={4}>
      {<CodeExample component={{}} code={code} showTitle={false} />}
    </Col>
    <Col tablet={4}>{component}</Col>
  </React.Fragment>
);

ListExample.propTypes = {
  code: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};

storiesOf('List', module).add('List', () => (
  <Heading name="List">
    <TabbedView>
      <Tab title="Usage">
        <HowToImport importModules="List" />
        <Row>
          <Col desktop={12} tablet={12}>
            <p>
              The List component was build to be as simple and flexible as you
              want.
            </p>

            <p>
              It works with just a string array or with <code>List.Item</code>{' '}
            </p>
          </Col>

          <ListExample {...simpleList} />
        </Row>
        <Row>
          <Col desktop={12} tablet={12}>
            <p>
              Also, you can add some properties to the list such as
              <code>ordered</code>,<code>divided</code>,<code>bullet</code>, and{' '}
              <code>inline</code>
            </p>
          </Col>

          <Col tablet={4}>
            {
              <CodeExample
                component={{}}
                code={`
<List inline> ... </List>
<List divided inline> ... </List>
<List ordered> ... </List>
<List divided bullet="»"> ... </List>
                `}
                showTitle={false}
              />
            }
          </Col>
          <Col tablet={3}>
            <List
              inline
              items={['Tomato sauce', 'Mustard', 'Barbecue sauce']}
            />
            <List
              divided
              inline
              items={['Tomato sauce', 'Mustard', 'Barbecue sauce']}
            />
          </Col>
          <Col tablet={2}>
            <List
              ordered
              items={['Tomato sauce', 'Mustard', 'Barbecue sauce']}
            />
          </Col>
          <Col tablet={2}>
            <List
              divided
              bullet="»"
              items={['Tomato sauce', 'Mustard', 'Barbecue sauce']}
            />
          </Col>
        </Row>
        <Row>
          <Col desktop={12} tablet={12}>
            <h3>Item</h3>

            <p>You have some alternatives to write an item.</p>
          </Col>

          <ListExample {...simpleListItemAlternatives} />
        </Row>
        <Row>
          <Col desktop={12} tablet={12}>
            <h3>Content</h3>

            <p>
              Like <code>List.Item</code>, you have some alternatives to write
              an content too.
            </p>
          </Col>

          <ListExample {...simpleListContent} />
        </Row>
      </Tab>
      <Tab title="API">
        <AutoPropsApi component={List} title="List" />
        <AutoPropsApi component={Item} title="List.Item" />
        <AutoPropsApi component={Content} title="List.Content" />
        <AutoPropsApi component={Header} title="List.Header" />
        <AutoPropsApi component={SubHeader} title="List.SubHeader" />
      </Tab>
    </TabbedView>
  </Heading>
));
