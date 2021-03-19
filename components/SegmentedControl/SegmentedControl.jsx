import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';
import {
  colors,
  spacing,
  baseFontSize as defaultBaseFontSize,
} from '../shared/theme';
import SegmentedButton from './SegmentedButton';

const SegmentedWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  label {
    border: 1px solid;
    border-right: 0px;
    ${({
      theme: {
        colors: {
          primary: { 700: primaryColor700 },
        },
        spacing: { xsmall, xxsmall },
      },
    }) => `
      border-color: ${primaryColor700};
      padding: ${xxsmall}px ${xsmall}px;
    `}

    &:first-child {
      border-radius: 4px 0px 0px 4px;
    }

    &:last-child {
      border-radius: 0px 4px 4px 0px;
      ${({
        theme: {
          colors: {
            primary: { 700: primaryColor700 },
          },
        },
      }) => `
        border: 1px solid ${primaryColor700};
      `}
    }
  }
`;

const MAX_NUM_BUTTONS = 5;

const SegmentedControl = ({ items, name, onChange, theme, darkMode }) => {
  const ButtonDefaultChecked = allItems => {
    const itemChecked = allItems.filter(item => item.checked);
    if (typeof itemChecked !== 'undefined' && itemChecked.length > 0)
      return itemChecked[0].value;

    return undefined;
  };

  const [itemChecked, setItemChecked] = useState(ButtonDefaultChecked(items));

  const onValueChange = (event, value, label) => {
    setItemChecked(value);
    onChange({ value, label }, event);
  };

  const isChecked = itemValue => (itemValue === itemChecked ? true : undefined);

  return (
    <Row withBreakpoints>
      <Col small={6} medium={5}>
        <SegmentedWrapper theme={theme}>
          {items.slice(0, MAX_NUM_BUTTONS).map(item => (
            <SegmentedButton
              key={item.value}
              icon={item.icon}
              label={item.label}
              value={item.value}
              checked={isChecked(item.value)}
              name={name}
              onChange={e => onValueChange(e, item.value, item.label)}
              darkMode={darkMode}
            />
          ))}
        </SegmentedWrapper>
      </Col>
    </Row>
  );
};

SegmentedControl.defaultProps = {
  name: 'segmented-control',
  onChange: () => {},
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    colors,
  },
  darkMode: false,
};

SegmentedControl.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    baseFontSize: PropTypes.number,
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
  darkMode: PropTypes.bool,
};

export default SegmentedControl;
