import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';

const LabelButton = styled(Button).attrs({ forwardedAs: 'label' })`
  width: 100%;
  border-radius: 0px;
`;

const ButtonIcon = styled(Icon)`
  margin: 8px;
`;

const ID_GENERATOR = uniqId('segmented-button-');

const a11yCheckedIndex = checked =>
  checked ? { tabIndex: -1 } : { tabIndex: 0 };

const SegmentedButton = ({ label, value, checked, name, onChange, icon }) => {
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
      {icon ? <ButtonIcon name={icon} aria-label={label} /> : label}
    </LabelButton>
  );
};

SegmentedButton.defaultProps = {
  checked: undefined,
  icon: undefined,
  onChange: () => {},
};

SegmentedButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SegmentedButton;
