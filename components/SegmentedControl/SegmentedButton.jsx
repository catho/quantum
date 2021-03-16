import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';
import HiddenInput from '../shared/HiddenInput';
import uniqId from '../shared/uniqId';

const LabelButton = styled(Button).attrs({ forwardedAs: 'label' })`
  width: 100%;
  border-radius: 0px;
`;

const ID_GENERATOR = uniqId('segmented-button-');

const SegmentedButton = ({ label, value, checked, name }) => {
  const ID = ID_GENERATOR.next().value;

  return (
    <LabelButton stroked={!checked} htmlFor={ID}>
      <HiddenInput
        id={ID}
        type="radio"
        name={name}
        value={value}
        onChange={e => e}
        checked={checked}
      />
      {label}
    </LabelButton>
  );
};

export default SegmentedButton;
