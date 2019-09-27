import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Title,
  StoryContainer,
  SimpleHighlight,
} from '@catho/quantum-storybook-ui';
import colors from '../../components/Colors';

const importColors = `import { Colors } from '@catho/quantum';`;

const exampleCode = `console.log(Colors.primary['500']);	
/*returns: #0CC0EA;*/	

console.log(Colors.secondary['500'])	
/*returns: #E91E63/*	
`;

const ColorBackground = styled.div`
  background-color: ${({ hex }) => hex};
  color: ${({ fontColor = 'white' }) => fontColor};
  width: 30%;
  padding: 50px 25px;
`;

const ColorDescription = styled.div`
  padding: 50px 25px;
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  background-color: #f7f7f7;
  font-size: 14px;
  padding: 15px;
  position: relative;
  color: #333;
`;

const ColorProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColorName = styled.div`
  font-size: 18px;
`;
const ColorNumber = styled.div`
  font-size: 14px;
`;
const ColorHex = styled.div`
  flex-grow: 0;
  padding: 5px;
  color: #666;
`;

const PalleteColor = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
`;

const ColorSample = ({ hex, number, name, fontColor }) => (
  <PalleteColor>
    <ColorBackground hex={hex} fontColor={fontColor}>
      <ColorName>{name}</ColorName>
      <ColorNumber>{number}</ColorNumber>
    </ColorBackground>

    <ColorDescription>
      <ColorProperties>
        <ColorName>
          Colors.{name}[{number}]
        </ColorName>
        <ColorHex>{hex}</ColorHex>
      </ColorProperties>
    </ColorDescription>
  </PalleteColor>
);

ColorSample.propTypes = {
  hex: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
};

ColorSample.defaultProps = {
  fontColor: '#fff',
};

export default () => (
  <StoryContainer>
    <Title as="h2">Importing colors</Title>
    <SimpleHighlight>{importColors}</SimpleHighlight>

    <Title as="h3">Usage</Title>
    <p>
      Colors is a object that expose the pallete and can be used in multiple
      places
    </p>
    <SimpleHighlight>{exampleCode}</SimpleHighlight>

    {Object.entries(colors).map(([colorSKin, objColor]) => (
      <div key={colorSKin}>
        <Title as="h3">{colorSKin}</Title>
        {Object.entries(objColor).map(([index, hex]) => (
          <ColorSample
            key={index}
            hex={hex}
            number={parseInt(index, 10)}
            fontColor={index < 500 ? '#000' : '#FFF'}
            name={colorSKin}
          />
        ))}
      </div>
    ))}
  </StoryContainer>
);
