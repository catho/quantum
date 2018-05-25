import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Step from './sub-components/Step';

const Container = styled.div`
  padding: 0;
  margin: 0;
`;

const ProgressBar = styled.ul`
  li {
      list-style-type: none;
      width: 25%;
      float: left;
      font-size: 12px;
      position: relative;
      text-align: center;
      color: #7d7d7d;
      margin-top: 50px;
  }

  li:before {
      width: 36px;
      height: 36px;
      content: '';
      line-height: 30px;
      border: 1px solid #cccccc;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
  }

   li:after {
      width: 100%;
      height: 1px;
      content: '';
      position: absolute;
      background-color: #a0a0a0;
      top: 15px;
      left: -50%;
      z-index: -1;
  }

  li:first-child:after {
      content: none;
  }

  li.active {
      color: #005da4;      
  }

  li.active:before {
      background: #005da4;
      border: 1px solid #005da4;
  }

  li.active + li:after {
      background-color: #165ea3;
  }

  li p {
    position: relative;
    top: -80px;
    width: 90px;
    margin: 0 auto;
  }
`;

const stepList = [
  { title: 'Criação de conta', active: true, icon: '1' },
  { title: 'Plano e forma de pagamento', active: true, icon: '2' },
  { title: 'Preencher o currículo', active: false, icon: '3' },
];

const Steps = () => (
  <React.Fragment>
    <Container>
      <ProgressBar>
        {stepList.map(step => <Step {...step} />)}
      </ProgressBar>
    </Container>
  </React.Fragment>
);

// Steps.propTypes = {
//   name: PropTypes.string,
// };
//
// Steps.defaultProps = {
//   name: 'Steps',
// };

export default Steps;
