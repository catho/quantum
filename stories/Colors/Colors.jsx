import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Colors from '../../components/Colors';
import Highlight from 'react-highlight';
import Title from '../../.storybook/components/Title';
import HowToImport from '../../.storybook/components/HowToImport';

export default () => (
  <React.Fragment>
    <p>Catho has some segments, below you can see the <strong>Candidates</strong> default color palette.</p>

    <HowToImport importModules={'Colors'} />

    <ColorPallete>
      {
        Object.keys(Colors).map(item => (
          Object.keys(Colors[item]).map(child => (
            <ColorList>
              {
                Object.entries(Colors[item][child]).map(([name, hex]) => (
                  <ColorBox key={hex} colorGroup={child} colorHex={hex}>
                    <CopyToClipboard text={hex}>
                      <ColorMessage colorHex={hex}>
                        Copy hex
                      </ColorMessage>
                    </CopyToClipboard>

                    <ColorName>{name}</ColorName>
                    <ColorHex>{hex}</ColorHex>
                  </ColorBox>
                ))
              }
            </ColorList>
          ))
        ))
      }
    </ColorPallete>

    <Title>Code</Title>
    <p>Some samples on how the Color object are structured</p>
    <Highlight language="javascript" className="highlight">
      {"console.log(Colors.PRIMARY.BLUE.CORNFLOWER);\n/*returns: #6EA5D6;*/"}
      {"\n\nconsole.log(Colors.SECONDARY.YELLOW.APRICOT)\n/*returns: #FCBF62/*"}
      {"\n\nconsole.log(Colors.SECONDARY.PINK.PIG)\n/*returns: #E76E97/*"}
      {"\n\nconsole.log(Colors.NEUTRAL.GRAY.WHITE)\n/*returns: #f9f9f9/*"}
      {"\n\nconsole.log(Colors.NEUTRAL.DARKERGRAY.WARMGREY)\n/*returns: #999999/*"}
    </Highlight>

    <Title>A bit more about Catho colors</Title>
    <p>Here's how the <strong>colors</strong> are segmented</p>

    <h3>Blue</h3>
    <p>It is the predominant color of the logo and this reflects in the main pages of the site, being present in the titles and sub-titles and prominent spaces.</p>

    <h3>Yellow</h3>
    <p>The color chosen for the screen's primary actions is yellow, we find it in most buttons and in action calls. There are situations where it is used to create contrast with blue.</p>

    <h3>Pink</h3>
    <p>Pink has been tested in some situations to create a point of immediate attention need of the user. The idea is to use it in lesser quantity and create the impact by the flashy color. it can be seen in notifications and toasters.</p>

    <h3>Grey</h3>
    <p>The gray palette is very complete and goes from background colors to the ashes used in the texts, currently we do not encourage the use of black even in the fonts.</p>
  </React.Fragment>
);

const ColorPallete = styled.div`
  display: flex;
  flex-direction: row;
  margin:40px 0;
`;

const ColorList = styled.ul`
  width: 185px;
  padding: 0;
  margin: 0 15px 0 0;
  list-style-type: none;
`;

const ColorMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: ${props => props.colorHex};
  position:absolute;
  width:100%;
  height:100%;
  text-align: left ;
  text-indent: 10px;
  opacity: 0;
  transition: all .20s ease;
`;

const radius = '3px';
const ColorBox = styled.li`
  background-color: ${props => props.colorHex};
  cursor: pointer;
  width: 100%;
  height: 85px;
  color: ${props => (props.colorGroup === 'GRAY' ? '#333333' : '#FFFFFF')};
  position:relative;

  &:first-child {
    border-top-left-radius: ${radius};
    border-top-right-radius: ${radius};
  }

  &:last-child {
    border-bottom-left-radius: ${radius};
    border-bottom-right-radius: ${radius};
  }

  &:hover ${ColorMessage} {
    opacity: 1;
  }
`;


const ColorName = styled.span`
  padding:10px 0 0 10px;
  display:block;
  font-size:16px;
`;

const ColorHex = styled.span`
  padding:10px;
  display:block;
  font-size:12px;
`;
