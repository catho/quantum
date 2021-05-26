import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  Heading,
  Tab,
  SimpleHighlight,
  Title,
  StoryContainer,
  AutoPropsApi,
  TabbedView,
  Table,
} from '@catho/quantum-storybook-ui';

import { List } from '../../components';

import {
  exampleItemsDefault,
  exampleItemsWithHeaderAndSubHeader,
  exampleItemsWithIcon,
} from './objectReference';

const Small = styled.small`
  font-size: 10px;
`;

const description =
  'List is a component with continuous, vertical indexes of text or icons.';

storiesOf('Foundation', module).add('List', () => (
  <>
    <Heading name="List">{description}</Heading>
    <TabbedView>
      <Tab title="Usage">
        <StoryContainer>
          <Title as="h2">Importing List</Title>
          <Table>
            <tbody>
              <tr>
                <td colSpan="3">
                  <SimpleHighlight>{`import { List } from '@catho/quantum';`}</SimpleHighlight>
                  <br />

                  <SimpleHighlight>{exampleItemsDefault.code}</SimpleHighlight>
                </td>
              </tr>
              <tr>
                <td>
                  ul {'>'} li <Small>16px</Small>
                </td>
                <td>
                  {'<List items={exampleItemsDefault} bullet="&bull;" />'}
                </td>
                <td>
                  <List items={exampleItemsDefault} bullet="&bull;" />
                </td>
              </tr>
              <tr>
                <td>
                  ol {'>'} li <Small>16px</Small>
                </td>
                <td>{'<List items={exampleItemsDefault} ordered />`'}</td>
                <td>
                  <List items={exampleItemsDefault} ordered />
                </td>
              </tr>
              <tr>
                <td>
                  ol {'>'} li <Small>16px</Small>
                </td>
                <td>
                  {'<List items={exampleItemsDefault} ordered divided/>`'}
                </td>
                <td>
                  <List items={exampleItemsDefault} ordered divided />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <SimpleHighlight>
                    {exampleItemsWithHeaderAndSubHeader.code}
                  </SimpleHighlight>
                </td>
              </tr>
              <tr>
                <td>
                  ul {'>'} li <Small>16px</Small>
                </td>
                <td>
                  {
                    '<List items={exampleItemsWithHeaderAndSubHeader} bullet="&bull;" />`'
                  }
                </td>
                <td>
                  <List
                    items={exampleItemsWithHeaderAndSubHeader}
                    bullet="&bull;"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <SimpleHighlight>{exampleItemsWithIcon.code}</SimpleHighlight>
                </td>
              </tr>
              <tr>
                <td>
                  ul {'>'} li <Small>16px</Small>
                </td>
                <td>
                  {'<List items={exampleItemsWithIcon} bullet="&bull;" />`'}
                </td>
                <td>
                  <List items={exampleItemsWithIcon} bullet="&bull;" />
                </td>
              </tr>
            </tbody>
          </Table>
        </StoryContainer>
      </Tab>
      <Tab title="API">
        <StoryContainer>
          <AutoPropsApi component={List} />
        </StoryContainer>
      </Tab>
    </TabbedView>
  </>
));
