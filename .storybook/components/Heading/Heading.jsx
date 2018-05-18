import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Atom from '../../static/atom.svg';

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

const Heading = ({
  title,
  image,
  children,
}) => (
  <React.Fragment>
    {
      <Title>
        { image &&
          <img
            alt={title}
            src={image}
            width="60"
            height="60"
          />
        }
        {title}
      </Title>
    }
    { children }
  </React.Fragment>
);

Heading.defaultProps = {
  image: Atom,
};

Heading.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Heading;
