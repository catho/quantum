import React from 'react';
import styled from 'styled-components';
import Highlight from 'react-highlight';
import StorybookTitle from '../../.storybook/components/Title';
import logo from '../static/logo.svg';

const IntroWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const Logo = styled.img`
  display: block;
  width: 100px;
  margin-right:20px;
`;

const Title = styled.h1`
  font-size: 68px;
  border: none;
  font-weight: 300;
`;

const TitleText = styled.div`
  display: block;
  font-size: 22px;
  margin-top: 5px;
  width:100%
  font-weight: 400;
`;

const Introduction = () => (
  <React.Fragment>
    <IntroWrapper>
      <Logo src={logo} alt="Logo" />

      <Title>
        Styleguide

        <TitleText>
          The oficial Catho Component Library
        </TitleText>
      </Title>
    </IntroWrapper>

    <StorybookTitle>Usage</StorybookTitle>

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
