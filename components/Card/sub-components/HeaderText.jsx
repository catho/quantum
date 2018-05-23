import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 0;
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

const SupportWrapper = styled.p`
  font-size: 14px;
  margin: 5px 0 0 0;
  padding: 0;
`;

const Title = props => <TitleWrapper {...props} />;

const SupportText = props => <SupportWrapper {...props} />;

const HeaderText = props => <TextWrapper {...props} />;

Title.displayName = 'Card.Title';

SupportText.displayName = 'Card.SupportText';

HeaderText.displayName = 'Card.HeaderText';

export { HeaderText, Title, SupportText };
