import React from 'react';
import Loader from './Loader';

const types = {
  Image: props => (<Loader {...props} />),
  Text: props => (
    <Loader {...props}>
      <rect x="0" y="15" rx="3" ry="3" width="250" height="4" />
      <rect x="0" y="30" rx="3" ry="3" width="220" height="4" />
      <rect x="0" y="45" rx="3" ry="3" width="170" height="4" />
      <rect x="0" y="60" rx="3" ry="3" width="250" height="4" />
      <rect x="0" y="75" rx="3" ry="3" width="200" height="4" />
      <rect x="0" y="90" rx="3" ry="3" width="140" height="4" />
      <rect x="0" y="105" rx="3" ry="3" width="80" height="4" />
    </Loader>
  ),
  List: props => (
    <Loader {...props}>
      <circle cx="10" cy="15" r="4" />
      <rect x="25" y="13" rx="5" ry="5" width="220" height="4" />
      <circle cx="10" cy="40" r="4" />
      <rect x="25" y="38" rx="5" ry="5" width="220" height="4" />
      <circle cx="10" cy="65" r="4" />
      <rect x="25" y="63" rx="5" ry="5" width="220" height="4" />
      <circle cx="10" cy="90" r="4" />
      <rect x="25" y="88" rx="5" ry="5" width="220" height="4" />
      <circle cx="10" cy="115" r="4" />
      <rect x="25" y="113" rx="5" ry="5" width="220" height="4" />
    </Loader>
  ),
  IconList: props => (
    <Loader {...props}>
      <circle cx="15" cy="25" r="14" />
      <rect x="35" y="18" rx="4" ry="4" width="100" height="4" />
      <rect x="35" y="30" rx="4" ry="4" width="50" height="2" />

      <circle cx="15" cy="65" r="14" />
      <rect x="35" y="58" rx="4" ry="4" width="100" height="4" />
      <rect x="35" y="70" rx="4" ry="4" width="50" height="2" />

      <circle cx="15" cy="105" r="14" />
      <rect x="35" y="98" rx="4" ry="4" width="100" height="4" />
      <rect x="35" y="110" rx="4" ry="4" width="50" height="2" />
    </Loader>
  ),
};

function setDisplayName(name) {
  types[name].displayName = `Loader.${name}`;
}

Object
  .keys(types)
  .map(setDisplayName);

export default types;
