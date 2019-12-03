import React from 'react';
import Proptypes from 'prop-types';

const Socials = ({ facebook, twitter, youtube }) => (
  <>
    <div>teste</div>
    <div>teste</div>
  </>
);

Socials.defaultProps = {
  facebook: 'http://url.com',
  youtube: 'http://url.com',
  twitter: 'http://url.com',
};

Socials.propTypes = {
  facebook: Proptypes.string,
  youtube: Proptypes.string,
  twitter: Proptypes.string,
};

export default Socials;
