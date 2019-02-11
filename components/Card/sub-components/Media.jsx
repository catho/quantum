import React from 'react';
import styled from 'styled-components';
import Image from '../../Image';
import Colors from '../../Colors/deprecated';

const MediaWrapper = styled(Image)`
  background-color: ${Colors.SECONDARY['100']};
`;

const Media = props => <MediaWrapper {...props} />;

Media.displayName = 'Card.Media';

export default Media;
