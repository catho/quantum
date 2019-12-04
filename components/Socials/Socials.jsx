import React from 'react';
import Proptypes from 'prop-types';
import SocialType from './sub-components/SocialType';

const Socials = ({ items, size }) => (
  <section>
    {items.map(item => (
      <SocialType
        key={`social-${item.name}`}
        url={item.url}
        type={item.name}
        size={size}
        description={item.description}
      />
    ))}
  </section>
);

Socials.defaultProps = {
  size: '48',
};

Socials.propTypes = {
  size: Proptypes.string,
  items: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string,
      url: Proptypes.string,
      description: Proptypes.string,
    }).isRequired,
  ).isRequired,
};

export default Socials;
