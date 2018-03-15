import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import FooterSection from './sub-components/FooterSection';
import { Container, Row, Col } from '../Grid';
import FooterBar from './sub-components/FooterBar';
import NavigateToTop from './sub-components/NavigateToTop';
import Data from './data';

const FooterContainer = styled(Container)`{
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props => props.theme.paddingTop};
  padding-bottom: ${props => props.theme.paddingBottom};
}`;

const StampsHolder = styled(Col)`{
  border-top: 1px solid ${props => props.theme.borderColor};
  padding-top: ${props => props.theme.StampsHolderPadding};
}`;

export default () => (
  <ThemeProvider theme={Data.theme}>
    <React.Fragment>
      <NavigateToTop />

      <FooterContainer fluid hide={['desktop', 'tablet', 'phone']} >
        <FooterContainer>
          <Row>
            <Col desktop={8}>
              <FooterSection data={Data.candidates} />
            </Col>
            <Col desktop={2}>
              <FooterSection data={Data.companies} />
              <FooterSection data={Data.courses} />
            </Col>
            <Col desktop={2}>
              <FooterSection data={Data.institutional} />
            </Col>

            <StampsHolder desktop={12}>
              <FooterSection data={Data.stamps} />
            </StampsHolder>
          </Row>
        </FooterContainer>
      </FooterContainer>

      <FooterBar />
    </React.Fragment>
  </ThemeProvider>
);
