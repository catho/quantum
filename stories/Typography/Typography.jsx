import React from 'react';
import styled from 'styled-components';
import LinkTo from '@storybook/addon-links/react';
import { HowToImport, Title } from '@catho-private/quantum-storybook-ui';

import Colors from '../../components/Colors/deprecated';

const Font = styled.div`
  font-family: Oxygen;
`;

const H = styled.span`
  font-size: ${props => props.size}px;
  color: ${Colors.SECONDARY['900']};
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

const Td = styled.td`
  width: 150px;
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

const Typography = () => (
  <Font>
    <p>
      <strong>Oxygen</strong> is the standard typeface for Catho on the web
    </p>

    <p>
      In order to use the default Catho Typography, just import the font css:
    </p>

    <HowToImport from="@cathodevel/quantum/static/typography.css" />

    <p>
      This font also provides all the available{' '}
      <LinkTo kind="1. Foundation" story="Icons">
        Icons
      </LinkTo>
    </p>

    <Title>Headings</Title>

    <table>
      <tbody>
        <Tr>
          <Td>
            h1 <Small>24px</Small>
          </Td>
          <td>
            <H size="24">Heading One</H>
          </td>
        </Tr>
        <Tr>
          <Td>
            h2 <Small>22px</Small>
          </Td>
          <td>
            <H size="22">Heading Two</H>
          </td>
        </Tr>
        <Tr>
          <Td>
            h3 <Small>20px</Small>
          </Td>
          <td>
            <H size="20">Heading Three</H>
          </td>
        </Tr>
        <Tr>
          <Td>
            h4 <Small>18px</Small>
          </Td>
          <td>
            <H size="18">Heading Four</H>
          </td>
        </Tr>
        <Tr>
          <Td>
            h5 <Small>18px</Small>
          </Td>
          <td>
            <H size="18">Heading Five</H>
          </td>
        </Tr>
      </tbody>
    </table>

    <Title>Texts</Title>

    <table>
      <tbody>
        <Tr>
          <Td>
            a <Small>inherit</Small>
          </Td>
          <td>
            <Link href="/">Lorem ipsum dolor sit amet.</Link>
          </td>
        </Tr>
        <Tr>
          <Td>
            p <Small>16px</Small>
          </Td>
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
          <Td>
            blockquote <Small>12px</Small>
          </Td>
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
          <Td>
            ul {'>'} li <Small>16px</Small>
          </Td>
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
          <Td>
            ol {'>'} li <Small>16px</Small>
          </Td>
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

export default Typography;
