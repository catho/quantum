import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Image';

const RoundedImage = styled(Image)`
  background-color: #e2e1e0;
  padding: 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 5px 15px 0px 0px;
`;

const Thumbnail = props => <RoundedImage {...props} />;

export default Thumbnail;