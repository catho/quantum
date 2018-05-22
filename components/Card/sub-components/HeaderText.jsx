import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Image';

const TextWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 0;
  padding: 0;

  p {
    color: #666;
  }
`;

const TitleWrapper = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const SuportWrapper = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  padding: 0;
`;

const Title = props => <TitleWrapper {...props} />;

const SupportText = props => <SuportWrapper {...props} />;

const HeaderText = props => <TextWrapper {...props} />;

export { HeaderText, Title, SupportText };