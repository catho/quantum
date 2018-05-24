import React from 'react';
import styled from 'styled-components';
import Image from '../../Image';

const RoundedImage = styled(Image)`
  background-color: #e2e1e0;
  padding: 5px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 15px;
`;

const Thumbnail = props => <RoundedImage {...props} />;

Thumbnail.displayName = 'Card.Thumbnail';

export default Thumbnail;
