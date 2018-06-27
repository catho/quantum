import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GitlabLogo from '../../static/logoGitlab.svg';

const baseUrl =
  'http://gitlab.devel/frontend-platform/quantum/blob/master/components/';

const Link = styled.a`
  position: absolute;
  right: 20px;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.3s;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

const GitlabLink = ({ name }) => (
  <Link href={`${baseUrl}${name}`} target="_blank">
    <Logo src={GitlabLogo} title="View Source" alt="View Source" />
  </Link>
);

GitlabLink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GitlabLink;
