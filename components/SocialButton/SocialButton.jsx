import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import FacebookIcon from './sub-components/FacebookIcon';
import GoogleIcon from './sub-components/GoogleIcon';
import { theme as defaultTheme } from '../shared';
import {
  components,
  spacing,
  colors as defaultColors,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';

const GoogleButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  cursor: pointer;
  padding: 7px;
  overflow: hidden;
  outline: none;
`;
const FacebookButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 9px;
  background-color: #3c5193;
  cursor: pointer;
  padding: 8px;
  border: none;
  overflow: hidden;
  outline: none;
`;

const SocialButton = ({ provider, title, ...props }) => {
  switch (provider) {
    case 'facebook':
      return (
        <FacebookButton {...props}>
          <FacebookIcon title={title} />
        </FacebookButton>
      );
    case 'google':
      return (
        <GoogleButton {...props} stroked skin="neutral">
          <GoogleIcon title={title} size={24} />
        </GoogleButton>
      );
    default:
      return <Button />;
  }
};

SocialButton.propTypes = {
  provider: PropTypes.oneOf(['facebook', 'google']).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  $as: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    colors: PropTypes.object,
    spacing: PropTypes.object,
    breakpoints: PropTypes.object,
    components: PropTypes.shape({
      button: PropTypes.object,
    }),
  }),
};

SocialButton.defaultProps = {
  type: 'button',
  $as: undefined,
  onClick: () => {},
  theme: {
    colors: defaultColors,
    baseFontSize: defaultBaseFontSize,
    spacing,
    breakpoints: defaultTheme.breakpoints,
    components: {
      button: components.button,
    },
  },
};

export default SocialButton;
