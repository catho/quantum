import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: ${props => (props.noGutter ? '0px' : '15px')};
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
`;

const Container = props => <ContainerWrapper {...props} />;

Container.displayName = 'Card.Container';

export default Container;
