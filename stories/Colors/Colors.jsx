import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import CodeToClipboard from '../../.storybook/components/CodeToClipboard';
import Colors from '../../components/Colors';
import Title from '../../.storybook/components/Title';
import HowToImport from '../../.storybook/components/HowToImport';

const ColorPallete = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, 1fr);

  margin-top: 40px;
  margin-bottom: 40px;
`;

const ColorList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CopyToClipboard = styled.div`
  background-color: ${props => props.colorHex};

  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;

  opacity: 0;
`;

const radius = '3px';
const ColorBox = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.colorHex};
  cursor: pointer;
  width: 100%;
  height: 48px;
  color: ${props => (props.grey ? '#333333' : '#FFFFFF')};
  position: relative;

  &:first-child {
    border-top-left-radius: ${radius};
    border-top-right-radius: ${radius};
  }

  &:last-child {
    border-bottom-left-radius: ${radius};
    border-bottom-right-radius: ${radius};
  }

  &:hover ${CopyToClipboard} {
    opacity: 1;
  }
`;

const ColorNumber = styled.span`
  font-size: 12px;
`;

const ColorHex = styled.span`
  font-size: 10px;
  font-weight: bold;
`;

const ColorTitle = styled(ColorBox)`
  height: 100px;
  flex-direction: column;
  align-items: flex-start;
`;

const PrimaryNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
`;

export default () => (
  <React.Fragment>
    <p>Catho has some segments, below you can see the <strong>Candidates</strong> default color palette.</p>

    <HowToImport importModules="Colors" />

    <ColorPallete>
      {
        Object.entries(Colors)
        .filter(([name]) => !['BLACK', 'WHITE'].includes(name))
        .map(([name, value]) => (
          <ColorList key={name}>
            <ColorTitle colorHex={Colors[name]['500']}>
              <p style={{ fontVariant: 'all-small-caps', fontWeight: 'bold' }}>{name}</p>

              <PrimaryNumber>
                <ColorNumber>500</ColorNumber>
                <ColorHex>{Colors[name]['500']}</ColorHex>
              </PrimaryNumber>
            </ColorTitle>
            {
              Object.entries(value).map(([number, hex], index) => (
                <ColorBox key={hex} grey={index < 4} colorHex={hex}>
                  <ColorNumber>{number}</ColorNumber>
                  <ColorHex>{hex}</ColorHex>

                  <CopyToClipboard colorHex={hex}>
                    <CodeToClipboard code={`Colors.${name}['${number}']`} color={index < 4 ? '#333333' : '#FFFFFF'} />
                  </CopyToClipboard>
                </ColorBox>
              ))
            }
          </ColorList>
        ))
      }
      <ColorList>
        <ColorBox colorHex={Colors.BLACK}>
          <ColorNumber>BLACK</ColorNumber>
          <ColorHex>{Colors.BLACK}</ColorHex>

          <CopyToClipboard colorHex={Colors.BLACK}>
            <CodeToClipboard code="Colors.BLACK" color="#FFFFFF" />
          </CopyToClipboard>
        </ColorBox>
        <ColorBox colorHex={Colors.WHITE} grey>
          <ColorNumber>WHITE</ColorNumber>
          <ColorHex>{Colors.WHITE}</ColorHex>

          <CopyToClipboard colorHex={Colors.WHITE}>
            <CodeToClipboard code="Colors.WHITE" color="#000000" />
          </CopyToClipboard>
        </ColorBox>
      </ColorList>
    </ColorPallete>

    <Title>Code</Title>
    <p>Some samples on how the Color object are structured</p>
    <Highlight language="javascript" className="highlight">
      {
        [
          'console.log(Colors.PRIMARY[\'200\']);',
          '/*returns: #80ADD1;*/',
          '\n',
          'console.log(Colors.SECONDARY[\'600\'])',
          '/*returns: #039BE5/*',
          '\n',
          'console.log(Colors.DANGER[\'400\'])',
          '/*returns: #EF5350/*',
          '\n',
          'console.log(Colors.BLACK)',
          '/*returns: #000000/*',
          '\n',
          'console.log(Colors.GREY[\'900\'])',
          '/*returns: #263238/*',
        ].join('\n')
      }
    </Highlight>
  </React.Fragment>
);
