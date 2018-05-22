import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Image';

const ContainerWrapper = styled.div`
  display:flex;
  margin: 0 auto;
  padding: ${props => props.noGutter ? '0px' : '15px'};
  flex-direction: ${props => props.horizontal ? 'row' : 'column'};
`;

const Container = props => <ContainerWrapper {...props} />;

export default Container;