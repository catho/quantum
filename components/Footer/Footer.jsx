import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import FooterSection from './sub-components/FooterSection';
import { Container, Row, Col } from '../Grid';
import FooterBar from './sub-components/FooterBar';
import NavigateToTop from './sub-components/NavigateToTop';
import dataSource from './data';

const FooterContainer = styled(Container)`{
  background-color: ${props => props.theme.backgroundColor};
  padding-top: ${props => props.theme.paddingTop};
  padding-bottom: ${props => props.theme.paddingBottom};
}`;

const StampsHolder = styled(Col)`{
  border-top: 1px solid ${props => props.theme.borderColor};
  padding-top: ${props => props.theme.StampsHolderPadding};
}`;

const Footer = ({ data }) => (
  <ThemeProvider theme={data.theme}>
    <React.Fragment>
      <NavigateToTop />

      <FooterContainer fluid hide={['desktop', 'tablet', 'phone']} >
        <FooterContainer>
          <Row>
            <Col desktop={8}>
              <FooterSection data={data.candidates} />
            </Col>
            <Col desktop={2}>
              <FooterSection data={data.companies} />
              <FooterSection data={data.courses} />
            </Col>
            <Col desktop={2}>
              <FooterSection data={data.institutional} />
            </Col>

            <StampsHolder desktop={12}>
              <FooterSection data={data.stamps} />
            </StampsHolder>
          </Row>
        </FooterContainer>
      </FooterContainer>

      <FooterBar />
    </React.Fragment>
  </ThemeProvider>
);

Footer.propTypes = {
  data: PropTypes.instanceOf(Object),
};

Footer.defaultProps = {
  data: dataSource,
};

export default Footer;
