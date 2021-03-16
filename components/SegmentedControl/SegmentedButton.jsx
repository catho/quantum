import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';

const LabelButton = styled(Button).attrs({ forwardedAs: 'label' })`
  width: 100%;
  border-radius: 0px;
`;

const ButtonIcon = styled(Icon)`
  ${({
    theme: {
      spacing: { xsmall },
    },
  }) => `
    margin: ${xsmall}px;
  `}
`;

const ID_GENERATOR = uniqId('segmented-button-');

const a11yCheckedIndex = checked =>
  checked ? { tabIndex: -1 } : { tabIndex: 0 };

const SegmentedButton = ({
  label,
  value,
  checked,
  name,
  onChange,
  icon,
  theme,
}) => {
  const ID = ID_GENERATOR.next().value;

  return (
    <LabelButton
      aria-label={label}
      stroked={!checked}
      htmlFor={ID}
      {...a11yCheckedIndex(checked)}
    >
      <HiddenInput
        id={ID}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={e => onChange({ value, label }, e)}
      />
      {icon ? (
        <ButtonIcon theme={theme} name={icon} aria-label={label} />
      ) : (
        label
      )}
    </LabelButton>
  );
};

SegmentedButton.defaultProps = {
  checked: undefined,
  icon: undefined,
  onChange: () => {},
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    colors,
  },
};

SegmentedButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
};

export default SegmentedButton;
