import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from '../Grid';
import Button from '../Button';
import HiddenInput from '../shared/HiddenInput';

const SegmentedWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LabelButton = styled(Button)`
  width: 100%;
  border-radius: 0px;
`;

const SegmentedControl = ({ items }) => (
  <Row no-gutters withBreakpoints>
    <Col small={6} medium={4}>
      <SegmentedWrapper>
        {items.map(item => (
          <LabelButton stroked={!item.checked} key={item.value}>
            <HiddenInput
              type="radio"
              name="segmented"
              value={item.value}
              onChange={e => e}
              checked={item.checked}
            />
            {item.label}
          </LabelButton>
        ))}
      </SegmentedWrapper>
    </Col>
  </Row>
);

SegmentedControl.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ).isRequired,
};

export default SegmentedControl;
