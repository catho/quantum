import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import logo from '../static/logo.png';
import ColorPalette from '../../components/Colors';

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 120px;
`;

const Title = styled.h2`
  border: none;
  text-align: center;
`;

const TitleText = styled.span`
  color: ${ColorPalette.NEUTRAL.GRAY.GREYISH};
  display: block;
  font-size: 14px;
  margin-top: 5px;
`;

const Introduction = () => (
  <React.Fragment>
    <Title>
      <Logo src={logo} alt="Logo" />
      Styleguide
      <TitleText>The oficial Catho Component Library</TitleText>
    </Title>

    <h2>Usage</h2>

    <p>Create a <code>.npmrc</code> file, with the following content:</p>
    <Highlight language="javascript" className="highlight">
      {`@kadira:registry=https://registry.npmjs.org
registry="http://armazem.devel:4873/`}
    </Highlight>

    <p>Add as a dependency:</p>
    <Highlight language="javascript" className="highlight">
      yarn add @cathodevel/style-guide
    </Highlight>

    <p>Use in your react project:</p>
    <Highlight language="javascript" className="highlight">
      {`import Header from '@cathodevel/style-guide';
export default () => <Header />;`}
    </Highlight>
  </React.Fragment>
);

export default Introduction;
