import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';

const Preview = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;

  border: 1px solid #dee6ed;
  box-shadow: 0 0 10px 2px #e5ebf1 inset;
  background: linear-gradient(
      45deg,
      #eff2f6 25%,
      transparent 25%,
      transparent 75%,
      #eff2f6 75%,
      #eff2f6 0
    ),
    linear-gradient(
      45deg,
      #eff2f6 25%,
      transparent 5%,
      transparent 75%,
      #eff2f6 75%,
      #eff2f6 0
    ),
    #fff;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-clip: border-box;
  background-origin: padding-box;
`;

const LivePreview = ({ component: { type: Component }, state, onChange }) => (
  <React.Fragment>
    <Title>Preview</Title>
    <Preview>
      <Component {...state} onChange={(e, data) => onChange(data)} />
    </Preview>
  </React.Fragment>
);

LivePreview.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LivePreview;
