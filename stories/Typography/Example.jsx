import React from 'react';
import styled from 'styled-components';

const colors = {
  'peacock-blue': '#005da4',
  black: '#333',
};

const H = styled.span`
  font-size: ${props => props.size}px;
  color: ${props => colors[props.color]};
`;

const Link = styled.a`
  color: ${colors['peacock-blue']};
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
  <React.Fragment>
    <p><strong>Introbook</strong> is the standard typeface for Catho on the web</p>

    <h2>Headings</h2>
    <hr />
    <table>
      <Tr>
        <Td>h1 <Small>24px</Small></Td>
        <td><H size="24" color="peacock-blue">Heading One</H></td>
      </Tr>
      <Tr>
        <Td>h2 <Small>22px</Small></Td>
        <td><H size="22" color="peacock-blue">Heading Two</H></td>
      </Tr>
      <Tr>
        <Td>h3 <Small>20px</Small></Td>
        <td><H size="20" color="peacock-blue">Heading Three</H></td>
      </Tr>
      <Tr>
        <Td>h4 <Small>18px</Small></Td>
        <td><H size="18" color="peacock-blue">Heading Four</H></td>
      </Tr>
      <Tr>
        <Td>h5 <Small>18px</Small></Td>
        <td><H size="18" color="black">Heading Five</H></td>
      </Tr>
    </table>

    <h2>Texts</h2>
    <hr />
    <table>
      <Tr>
        <Td>a <Small>inherit</Small></Td>
        <td><Link href="#">Lorem ipsum dolor sit amet.</Link></td>
      </Tr>
      <Tr>
        <Td>p <Small>16px</Small></Td>
        <td><P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem magna, molestie at pretium non, consequat sit amet ante. Aenean et ultrices elit. Suspendisse quis urna consequat, condimentum tortor ut, laoreet magna. Praesent accumsan massa pellentesque felis tempus, at semper lacus ullamcorper. Vestibulum maximus est est, sed ullamcorper mi pellentesque at. Nunc facilisis blandit felis sed sollicitudin. Proin rutrum consectetur gravida.</P></td>
      </Tr>
      <Tr>
        <Td>blockquote <Small>12px</Small></Td>
        <td><Blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem magna, molestie at pretium non, consequat sit amet ante. Aenean et ultrices elit. Suspendisse quis urna consequat, condimentum tortor ut, laoreet magna. Praesent accumsan massa pellentesque felis tempus, at semper lacus ullamcorper. Vestibulum maximus est est, sed ullamcorper mi pellentesque at. Nunc facilisis blandit felis sed sollicitudin. Proin rutrum consectetur gravida.</Blockquote></td>
      </Tr>
    </table>

    <h2>Lists</h2>
    <hr />
    <table>
      <Caption>Lists have line-height of 24 pixels.</Caption>
      <Tr>
        <Td>ul > li <Small>16px</Small></Td>
        <td>
          <Ul style={{ marginBottom: '20px' }}>
            <Li>Lorem ipsum dolor sit amet</Li>
            <Li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Li>
            <Li>Consectetur adipiscing elit</Li>
          </Ul>
        </td>
      </Tr>
      <Tr>
        <Td>ol > li <Small>16px</Small></Td>
        <td>
          <Ol>
            <Li>Lorem ipsum dolor sit amet</Li>
            <Li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Li>
            <Li>Consectetur adipiscing elit</Li>
          </Ol>
        </td>
      </Tr>
    </table>
  </React.Fragment>
);

export default Typography;
