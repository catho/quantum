import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from '../../Image';

const MediaWrapper = styled(Image)`
  background-color: #ccc;
`;

const Media = props => <MediaWrapper {...props} />;

export default Media;