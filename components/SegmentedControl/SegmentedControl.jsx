import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';
import { colors, spacing } from '../shared/theme';
import SegmentedButtons from './SegmentedButtons';

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

const SegmentedControl = ({ items, name, onChange, theme, darkMode }) => (
  <Row withBreakpoints>
    <Col small={6} medium={5}>
      <SegmentedWrapper theme={theme}>
        <SegmentedButtons
          items={items}
          name={name}
          darkMode={darkMode}
          onChange={onChange}
        />
      </SegmentedWrapper>
    </Col>
  </Row>
);

SegmentedControl.defaultProps = {
  name: 'segmented-control',
  onChange: () => {},
  theme: {
    spacing,
    colors,
  },
  darkMode: false,
};

SegmentedControl.propTypes = {
  /** this prop receives a array of object with all the content */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
  /** sets the name of component */
  name: PropTypes.string,
  /** receives a callback function */
  onChange: PropTypes.func,
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    colors: PropTypes.object,
  }),
  /** this prop changes the layout to dark mode */
  darkMode: PropTypes.bool,
};

export default SegmentedControl;
