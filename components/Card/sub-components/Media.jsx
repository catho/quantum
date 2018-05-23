import React from 'react';
import styled from 'styled-components';
import Image from '../../Image';

const MediaWrapper = styled(Image)`
  background-color: #ccc;
`;

const Media = props => <MediaWrapper {...props} />;

Media.displayName = 'Card.Media';

export default Media;
