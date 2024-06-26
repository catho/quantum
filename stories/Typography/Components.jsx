/* eslint-disable jsx-a11y/control-has-associated-label */
import styled from 'styled-components';

import { Title, Subtitle, Blockquote } from '../../components/Typography';
import List from '../../components/List';
import { exampleItemsDefault } from '../List/objectReference';

import { Table } from '../shared';

const Small = styled.small`
  font-size: 10px;
`;

export const Headings = () => (
  <Table>
    <tbody>
      <tr>
        <td>
          h1 <Small>48px</Small>
        </td>
        <td>
          <code>{'<Title />'}</code>
        </td>
        <td>
          <Title>Heading One</Title>
        </td>
      </tr>
      <tr>
        <td>
          h2 <Small>54px</Small>
        </td>
        <td>
          <code>{'<Title as="h2" />'}</code>
        </td>
        <td>
          <Title as="h2">Heading Two</Title>
        </td>
      </tr>
      <tr>
        <td>
          h3 <Small>28px</Small>
        </td>
        <td>
          <code>{'<Title as="h3" />'}</code>
        </td>
        <td>
          <Title as="h3">Heading Three</Title>
        </td>
      </tr>
      <tr>
        <td>
          h4 <Small>24px</Small>
        </td>
        <td>
          <code>{'<Title as="h4" />'}</code>
        </td>
        <td>
          <Title as="h4">Heading Four</Title>
        </td>
      </tr>
      <tr>
        <td>
          h5 <Small>20px</Small>
        </td>
        <td>
          <code>{'<Title as="h5" />'}</code>
        </td>
        <td>
          <Title as="h5">Heading Five</Title>
        </td>
      </tr>
      <tr>
        <td>
          h6 <Small>18px</Small>
        </td>
        <td>
          <code>{'<Title as="h6" />'}</code>
        </td>
        <td>
          <Title as="h6">Heading Six</Title>
        </td>
      </tr>
      <tr>
        <td>
          Subtitle <Small>14px</Small>
        </td>
        <td>
          <code>{'<Subtitle />'}</code>
        </td>
        <td>
          <Subtitle>Heading Two</Subtitle>
        </td>
      </tr>
    </tbody>
  </Table>
);

export const Texts = () => (
  <Table>
    <tbody>
      <tr>
        <td>
          blockquote <Small>12px</Small>
        </td>
        <td>
          <code>{'<Blockquote />'}</code>
        </td>
        <td>
          <Blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lorem magna, molestie at pretium non, consequat sit amet ante.
            Aenean et ultrices elit. Suspendisse quis urna consequat,
            condimentum tortor ut, laoreet magna. Praesent accumsan massa
            pellentesque felis tempus, at semper lacus ullamcorper. Vestibulum
            maximus est est, sed ullamcorper mi pellentesque at. Nunc facilisis
            blandit felis sed sollicitudin. Proin rutrum consectetur gravida.
          </Blockquote>
        </td>
      </tr>
    </tbody>
  </Table>
);

export const Lists = () => (
  <Table>
    <tbody>
      <tr>
        <td>
          ul {'>'} li <Small>16px</Small>
        </td>
        <td>{'<List items={exampleItemsDefault} bullet="&bull;" />'}</td>
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
    </tbody>
  </Table>
);
