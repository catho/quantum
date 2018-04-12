import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import atomImage from '../../../stories/static/atom.svg';
import formulaImage from '../../../stories/static/formula.svg';

const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  font-weight: normal;
  padding: 15px 0;
  margin: 0;
  font-size: 32px;

  img {
    margin-right: 10px;
  }
`;

const Heading = ({ atom, title, children }) => (
  <React.Fragment>
    {
      <Title>
        <img
          alt={title}
          src={atom ? atomImage : formulaImage}
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
