import React from 'react';
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
      border: 1px solid;
    }
  }
`;

const MAX_NUM_BUTTONS = 5;

const SegmentedControl = ({ items, name, onChange, theme }) => (
  <Row withBreakpoints>
    <Col small={6} medium={4}>
      <SegmentedWrapper theme={theme}>
        {items.slice(0, MAX_NUM_BUTTONS).map(item => (
          <SegmentedButton
            key={item.value}
            icon={item.icon}
            label={item.label}
            value={item.value}
            checked={item.checked}
            name={name}
            onChange={onChange}
          />
        ))}
      </SegmentedWrapper>
    </Col>
  </Row>
);

SegmentedControl.defaultProps = {
  name: 'segmented-control',
  onChange: () => {},
  theme: {
    baseFontSize: defaultBaseFontSize,
    spacing,
    colors,
  },
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
};

export default SegmentedControl;
