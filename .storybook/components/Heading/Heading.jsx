import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  padding: 15px 0;
  margin: 0;
  font-size: 46px;
  font-weight: 300;

  img {
    margin-right: 10px;
  }
`;

const Heading = ({ atom, title, image, children }) => (
  <React.Fragment>
    {
      <Title>
        <img
          alt={title}
          src={image}
          width="60"
          height="60"
        />
        {
          `${atom ? `<${title} />` : title}`
        }
      </Title>
    }
    { children }
  </React.Fragment>
);

Heading.defaultProps = {
  atom: false,
};

Heading.propTypes = {
  atom: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
