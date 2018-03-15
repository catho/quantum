import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Row, Col } from '../../Grid';
import FooterLinkGroup from './FooterLinkGroup';

const SectionTitle = styled.div`
  color: ${props => props.theme.primaryColor};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.titleFontSize};
  font-weight: ${props => props.theme.titleFontWeight};
  position: relative;
  margin-bottom: 15px;
  &::after {
    background-color: ${props => props.theme.primaryColor};
    position: absolute;
    bottom: 7px;
    margin-left: 10px;
    content: "-";
    width: 95%;
    text-indent: -5000px;
    height: 2px;
 }
`;

class FooterSection extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <ThemeProvider theme={this.data.theme}>
        <Row no-gutters>
          <Col desktop={12}>
            {
              this.data.title != null &&
              <SectionTitle>
                {this.data.title}
              </SectionTitle>
            }
            <Row no-gutters>
              {
                this.props.data.linkGroups.map(linkGroup => (
                  <Col desktop={linkGroup.cols} key={linkGroup.id}>
                    <FooterLinkGroup
                      data={linkGroup}
                    />
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </ThemeProvider>
    );
  }
}

// propTypes
FooterSection.propTypes = { data: PropTypes.instanceOf(Object) };
FooterSection.defaultProps = { data: null };

export default FooterSection;
