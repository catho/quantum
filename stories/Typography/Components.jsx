import React from 'react';
import styled from 'styled-components';
import LinkTo from '@storybook/addon-links/react';

import {
  Title,
  StoryContainer,
  Table,
} from '@catho-private/quantum-storybook-ui';

import {
  Title as QuantumTitle,
  Subtitle,
  Blockquote,
  Typography,
} from '../../components/GlobalStyle';

const Small = styled.small`
  font-size: 10px;
`;

const Components = () => (
  <StoryContainer>
    <Title as="h2">Headings</Title>

    <Typography />
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
            <QuantumTitle>Heading One</QuantumTitle>
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
            <QuantumTitle as="h2">Heading Two</QuantumTitle>
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
            <QuantumTitle as="h3">Heading Three</QuantumTitle>
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
            <QuantumTitle as="h4">Heading Four</QuantumTitle>
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
            <QuantumTitle as="h5">Heading Five</QuantumTitle>
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
            <QuantumTitle as="h6">Heading Six</QuantumTitle>
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

    <Title as="h2">Texts</Title>

    <Table>
      <tbody>
        {/* // TODO: waiting spec
        <tr>
          <td>
            a <Small>inherit</Small>
          </td>
          <td>
            <Link href="/">Lorem ipsum dolor sit amet.</Link>
          </td>
        </tr>
        <tr>
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
        </tr> */}
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
              maximus est est, sed ullamcorper mi pellentesque at. Nunc
              facilisis blandit felis sed sollicitudin. Proin rutrum consectetur
              gravida.
            </Blockquote>
          </td>
        </tr>
      </tbody>
    </Table>

    <Title as="h2">Lists</Title>

    <Table>
      <tbody>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
      </tbody>
    </Table>
  </StoryContainer>
);

export default Components;
