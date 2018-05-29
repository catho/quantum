import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../../Grid';

const CathoFooterInfo = styled.div`
  font-family: ${props => props.theme.fontFamily};

  font-size: ${props => props.theme.fontSize};
  padding:20px 0px 15px 0px;
  margin-left:20px;
  a {
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    margin-left:5px;
    @media (max-width: 980px) {
      color: #CCC;
      text-decoration: underline;
    }
  }
`;

const FooterBarContainer = styled(Container)`{
  background-color: #e8e8e8;
  width: ${props => (props.fluid ? 'auto' : props.theme.containerWidth)};
  color: ${props => props.theme.secondaryColor};
  @media (max-width: 980px) {
    background-color:#333;
    color: #CCC;
  }
}`;

const ColFlex = styled(Col)`{
  display: flex;
  align-items: center;
}`;

const Catho = () => (
  <CathoFooterInfo>
    Catho Online Ltda. CNPJ: 03.753.088/0001-00 Alameda Juari, 262a - Barueri, SP - 06460-090
    <a target="_blank" rel="noopener noreferrer" href="https://www.catho.com.br/institucional/privacidade-relacionamento/" >
         Política de Privacidade
    </a>
  </CathoFooterInfo>
);

export default () => (
  <FooterBarContainer fluid>
    <Row>
      <Col desktop={12}>
        <FooterBarContainer>
          <Row>
            <ColFlex desktop={12}>
              <img alt="Catho logo" src={`${process.env.DOMAIN}/ms/fragments-footer/static/cathoFooter.png`} />
              <Catho />
            </ColFlex>
          </Row>
        </FooterBarContainer>
      </Col>
    </Row>
  </FooterBarContainer>
);
