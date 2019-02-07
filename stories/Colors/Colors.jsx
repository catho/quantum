import React from 'react';
import styled from 'styled-components';
import {
  Title,
  Subtitle,
  HowToImport,
  CodeExample,
  CodeToClipboard,
} from '@catho-private/quantum-storybook-ui';
import Colors from '../../components/Colors';

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
          Colors.{name.toUpperCase()}[{number}]
        </ColorName>
        <ColorHex>{hex}</ColorHex>
      </ColorProperties>

      <CodeToClipboard code={`Colors.${name.toUpperCase()}[${number}]`} />
    </ColorDescription>
  </PalleteColor>
);

const exampleCode = `console.log(Colors.BLUE['500']);
/*returns: #1355d0;*/

console.log(Colors.PINK['500'])
/*returns: #de0059/*
`;

export default () => (
  <React.Fragment>
    <p>
      Catho has some segments, below you can see the
      <strong> Candidates</strong> default color palette.
    </p>

    <HowToImport importModules="Colors" />

    <Title>Usage</Title>
    <p>Some samples on how the Color object are structured</p>

    <CodeExample showTitle={false} code={exampleCode} />

    <br />
    <Title>Brand colors</Title>

    <Subtitle>Blue</Subtitle>
    <p>
      É a brand color principal. Esta cor passa em AAA no contrast checker das
      diretrizes WCAG por isso pode ser usada em diversos contextos como botões,
      textos e headings, backgrounds, elementos gráficos e default states.
    </p>

    <ColorSample hex={Colors.BLUE[500]} number={500} name="Blue" />
    <ColorSample
      hex={Colors.BLUE[200]}
      number={200}
      name="Blue"
      fontColor="black"
    />
    <ColorSample hex={Colors.BLUE[50]} number={50} name="Blue" />

    <Subtitle>Sky</Subtitle>
    <p>
      Ë uma cor secundária que pode ser usada somente em elementos de apoio como
      backgrounds, elementos gráficos, ícones, strokes e estados informativos.
      Não é recomendado usar esta cor em textos e headings pois ela não passa no
      contrast checker da WCAG.
    </p>
    <ColorSample hex={Colors.SKY[500]} number={500} name="Sky" />

    <Subtitle>Cobalt</Subtitle>
    <p>
      É outra cor secundária que pode ser usada em elementos de suporte como
      backgrounds, elementos gráficos, ícones, textos e headings. Ela passa em
      AAA nas diretrizes WCAG e por isso também é indicada para textos.
    </p>
    <ColorSample hex={Colors.COBALT[500]} number={500} name="Cobalt" />

    <Subtitle>Pink</Subtitle>
    <p>
      É usada principalmente em contextos de grande destaque como CTAs e
      highlights. Evitar usar em contextos onde não incitam ação ou destaque.
    </p>
    <ColorSample hex={Colors.PINK[500]} number={500} name="Pink" />

    <br />

    <Title>Support colors</Title>

    <p>
      Os tons 500 são usados para ícones, strokes de inputs e buttons mas não
      são indicados para textos por não passarem no contrast checker de WCAG.
      <br />
      Os tons 200 são usados exclusivamente para backgrounds.
      <br />
      Os tons 900 são usados exclusivamente para textos por passarem no contrast
      checker de WCAG.
      <br />
    </p>

    <Subtitle>Success</Subtitle>
    <ColorSample hex={Colors.SUCCESS[900]} number={900} name="Success" />
    <ColorSample hex={Colors.SUCCESS[500]} number={500} name="Success" />
    <ColorSample
      hex={Colors.SUCCESS[200]}
      number={200}
      name="Success"
      fontColor="black"
    />

    <Subtitle>Warning</Subtitle>
    <ColorSample hex={Colors.WARNING[900]} number={900} name="Warning" />
    <ColorSample hex={Colors.WARNING[500]} number={500} name="Warning" />
    <ColorSample
      hex={Colors.WARNING[200]}
      number={200}
      name="Warning"
      fontColor="black"
    />

    <Subtitle>Error</Subtitle>
    <ColorSample hex={Colors.ERROR[900]} number={900} name="Error" />
    <ColorSample hex={Colors.ERROR[500]} number={500} name="Error" />
    <ColorSample
      hex={Colors.ERROR[200]}
      number={200}
      name="Error"
      fontColor="black"
    />

    <br />

    <Title>Neutral colors</Title>
    <Subtitle>Black</Subtitle>
    <p>
      É usado principalmente para textos e headings. Passa em AAA no contrast
      checker.
    </p>
    <ColorSample hex={Colors.BLACK[900]} number={900} name="Black" />
    <p>
      É usado para textos em geral e também pode indicar estados ativos. Passa
      em AAA no contrast checker.
    </p>
    <ColorSample hex={Colors.BLACK[700]} number={700} name="Black" />
    <p>
      É usado para strokes e também pode indicar estados inativos. Não passa em
      Acessibilidade.
    </p>
    <ColorSample hex={Colors.BLACK[400]} number={400} name="Black" />
    <p>
      É um tom neutro auxiliar e pode ser usado para estados inativos. Não passa
      em Acessibilidade.
    </p>
    <ColorSample hex={Colors.BLACK[200]} number={200} name="Black" />
    <p>
      É usada para indicar campos de inputs desabilitados. Não passa em
      Acessibilidade.
    </p>
    <ColorSample
      hex={Colors.BLACK[100]}
      number={100}
      name="Black"
      fontColor="black"
    />

    <Subtitle>Shadow</Subtitle>
    <ColorSample
      hex={Colors.SHADOW[40]}
      number={200}
      name="Shadow"
      fontColor="black"
    />
  </React.Fragment>
);
