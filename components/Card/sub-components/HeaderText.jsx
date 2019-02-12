import React from 'react';
import styled from 'styled-components';
import Colors from '../../Colors/deprecated';

const TextWrapper = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  p {
    color: ${Colors.SECONDARY['200']};
  }
`;

const TitleWrapper = styled.header`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const SupportWrapper = styled.p`
  font-size: 14px;
  margin-top: 5px;
  padding: 0;
`;

const Title = props => <TitleWrapper {...props} />;

const SupportText = props => <SupportWrapper {...props} />;

const HeaderText = props => <TextWrapper {...props} />;

Title.displayName = 'Card.Title';

SupportText.displayName = 'Card.SupportText';

HeaderText.displayName = 'Card.HeaderText';

export { HeaderText, Title, SupportText };
