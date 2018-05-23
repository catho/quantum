import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  padding: ${props => (props.noGutter ? '0' : '15px')};
`;

const Container = props => <ContainerWrapper {...props} />;

Container.displayName = 'Card.Container';

export default Container;
