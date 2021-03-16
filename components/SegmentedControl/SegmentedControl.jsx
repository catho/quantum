import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';
import SegmentedButton from './SegmentedButton';

const SegmentedWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SegmentedControl = ({ items, name, onChange }) => (
  <Row withBreakpoints>
    <Col small={6} medium={4}>
      <SegmentedWrapper>
        {items.map(item => (
          <SegmentedButton
            key={item.value}
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
};

export default SegmentedControl;
