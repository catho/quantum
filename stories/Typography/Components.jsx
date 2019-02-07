import React from 'react';
import styled from 'styled-components';
import { Title } from '@catho-private/quantum-storybook-ui';

import Colors from '../../components/Colors';
import { Title as QuantumTitle } from '../../components/GlobalStyle';

const Font = styled.div`
  * {
    font-family: Montserrat, sans-serif !important;
  }
`;

const Link = styled.a`
  color: ${Colors.PRIMARY['500']};
`;

const P = styled.p`
  font-size: 16px;
`;

const Small = styled.small`
  font-size: 10px;
`;

const Caption = styled.caption`
  padding: 10px;
  text-align: left;
`;

const Tr = styled.tr`
  height: 54px;
`;

const Blockquote = styled.blockquote`
  color: #999;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
`;

const Ul = styled.ul`
  margin: 0;
  padding-left: 18px;
`;

const Ol = styled.ol`
  margin: 0;
  padding-left: 18px;
`;

const Li = styled.li`
  line-height: 24px;
`;

const Components = () => (
  <Font>
    <Title>Headings</Title>

    <table>
      <tbody>
        <Tr>
          <td style={{ width: 90 }}>
            h1 <Small>48px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h1">
              Heading One
            </QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td style={{ width: 90 }}>
            h2 <Small>54px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title as="h2" />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h2">
              Heading Two
            </QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td style={{ width: 90 }}>
            h3 <Small>28px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title as="h3" />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h3">
              Heading Three
            </QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td style={{ width: 90 }}>
            h4 <Small>24px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title as="h4" />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h4">
              Heading Four
            </QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td style={{ width: 90 }}>
            h5 <Small>20px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title as="h5" />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h5">
              Heading Five
            </QuantumTitle>
          </td>
        </Tr>
        <Tr>
          <td style={{ width: 90 }}>
            h6 <Small>18px</Small>
          </td>
          <td style={{ width: 220 }}>
            <code>{'<Title as="h6" />'}</code>
          </td>
          <td>
            <QuantumTitle style={{ fontFamily: 'NunitoSans' }} as="h6">
              Heading Six
            </QuantumTitle>
          </td>
        </Tr>
      </tbody>
    </table>

    <Title>Texts</Title>

    <table>
      <tbody>
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
        </Tr>
        <Tr>
          <td>
            blockquote <Small>12px</Small>
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
      <Caption>Lists have line-height of 24 pixels.</Caption>
      <tbody>
        <Tr>
          <td>
            ul {'>'} li <Small>16px</Small>
          </td>
          <td>
            <Ul style={{ marginBottom: '20px' }}>
              <Li>Lorem ipsum dolor sit amet</Li>
              <Li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </Li>
              <Li>Consectetur adipiscing elit</Li>
            </Ul>
          </td>
        </Tr>
        <Tr>
          <td>
            ol {'>'} li <Small>16px</Small>
          </td>
          <td>
            <Ol>
              <Li>Lorem ipsum dolor sit amet</Li>
              <Li>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </Li>
              <Li>Consectetur adipiscing elit</Li>
            </Ol>
          </td>
        </Tr>
      </tbody>
    </table>
  </Font>
);

export default Components;
