import React from 'react';
import styled from 'styled-components';
import LinkTo from '@storybook/addon-links/react';
import { Title } from '@catho-private/quantum-storybook-ui';

import {
  Title as QuantumTitle,
  Subtitle,
  Blockquote,
} from '../../components/GlobalStyle';

const Small = styled.small`
  font-size: 10px;
`;

const Tr = styled.tr`
  height: 54px;

  td:first-child {
    width: 140px;
  }

  td:nth-child(2) {
    width: 180px;
  }
`;

const Components = () => (
  <>
    <Title>Headings</Title>

    <table>
      <tbody>
        <Tr>
          <td>
            h1 <Small>48px</Small>
          </td>
          <td>
            <code>{'<Title />'}</code>
          </td>
          <td>
            <QuantumTitle>Heading One</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            h2 <Small>54px</Small>
          </td>
          <td>
            <code>{'<Title as="h2" />'}</code>
          </td>
          <td>
            <QuantumTitle as="h2">Heading Two</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            h3 <Small>28px</Small>
          </td>
          <td>
            <code>{'<Title as="h3" />'}</code>
          </td>
          <td>
            <QuantumTitle as="h3">Heading Three</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            h4 <Small>24px</Small>
          </td>
          <td>
            <code>{'<Title as="h4" />'}</code>
          </td>
          <td>
            <QuantumTitle as="h4">Heading Four</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            h5 <Small>20px</Small>
          </td>
          <td>
            <code>{'<Title as="h5" />'}</code>
          </td>
          <td>
            <QuantumTitle as="h5">Heading Five</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            h6 <Small>18px</Small>
          </td>
          <td>
            <code>{'<Title as="h6" />'}</code>
          </td>
          <td>
            <QuantumTitle as="h6">Heading Six</QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td>
            Subtitle <Small>14px</Small>
          </td>
          <td>
            <code>{'<Subtitle />'}</code>
          </td>
          <td>
            <Subtitle>Heading Two</Subtitle>
          </td>
        </Tr>
      </tbody>
    </table>

    <Title>Texts</Title>

    <table>
      <tbody>
        {/* // TODO: waiting spec
        <Tr>
          <td>
            a <Small>inherit</Small>
          </td>
          <td>
            <Link href="/">Lorem ipsum dolor sit amet.</Link>
          </td>
        </Tr>
        <Tr>
          <td>
            p <Small>16px</Small>
          </td>
          <td>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              lorem magna, molestie at pretium non, consequat sit amet ante.
              Aenean et ultrices elit. Suspendisse quis urna consequat,
              condimentum tortor ut, laoreet magna. Praesent accumsan massa
              pellentesque felis tempus, at semper lacus ullamcorper. Vestibulum
              maximus est est, sed ullamcorper mi pellentesque at. Nunc
              facilisis blandit felis sed sollicitudin. Proin rutrum consectetur
              gravida.
            </P>
          </td>
        </Tr> */}
        <Tr>
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
              maximus est est, sed ullamcorper mi pellentesque at. Nunc
              facilisis blandit felis sed sollicitudin. Proin rutrum consectetur
              gravida.
            </Blockquote>
          </td>
        </Tr>
      </tbody>
    </table>

    <Title>Lists</Title>

    <table>
      <tbody>
        <Tr>
          <td>
            ul {'>'} li <Small>16px</Small>
          </td>
          <td>
            <LinkTo kind="10. List" story="List">
              {'<List />'}
            </LinkTo>
          </td>
          <td>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </td>
        </Tr>
        <Tr>
          <td>
            ol {'>'} li <Small>16px</Small>
          </td>
          <td>
            <LinkTo kind="10. List" story="List">
              {'<List />'}
            </LinkTo>
          </td>
          <td>
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </li>
              <li>Consectetur adipiscing elit</li>
            </ol>
          </td>
        </Tr>
      </tbody>
    </table>
  </>
);

export default Components;
