import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icon';
import Colors from '../../Colors';
import { BREAKPOINTS } from '../../Grid/sub-components';

const statusFontColor = ({ status }) => {
  switch (status) {
    case 'active':
      return `color: ${Colors.WHITE};`;
    case 'done':
      return `color: ${Colors.PRIMARY['500']};`;
    default:
      return `color: ${Colors.GREY['100']};`;
  }
};

const StepIcon = styled(Icon)`
  position: relative;
  top: -40px;
  
  ${statusFontColor}
`;

const ProgressStep = styled.li`
  list-style-type: none;
  flex-grow: 1;
  flex: 1;
  font-size: 12px;
  position: relative;
  text-align: center;
  color: ${Colors.GREY['400']};
  margin-top: 50px;
  
  @media (max-width: ${BREAKPOINTS.phone}px) {
    font-size: 10px;
  }

  &:before {
    width: 36px;
    height: 36px;
    content: '';
    line-height: 30px;
    border: 2px solid ${Colors.GREY['100']};
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    border-radius: 50%;
    background-color: white;
  }

  &:after {
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    background-color: ${Colors.GREY['100']};
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  &:first-child:after {
    content: none;
  }
  
  p {
    position: absolute;
    top: -24px;
    margin: 0 auto;
    padding: 4px;
    overflow: hidden;
    width: 100%;
    word-wrap: break-word;
    
    @media (min-width: ${BREAKPOINTS.phone + 1}px) and (max-width: ${BREAKPOINTS.tablet}px) {
      top: -32px;
    }
    @media (max-width: ${BREAKPOINTS.phone}px) {
      top: -30px;
    }
  }
  
  ${({ status }) => status === 'active' && `
    color: ${Colors.PRIMARY['500']};
    
    &:after {
      background-color: ${Colors.PRIMARY['500']};
    }
  
    &:before {
      background: ${Colors.PRIMARY['500']};
      border: 2px solid ${Colors.PRIMARY['500']};
    }
  `}
  
  ${({ status }) => status === 'done' && `
    &:after {
      background-color: ${Colors.PRIMARY['500']};
    }
    
    &:before {
      background: ${Colors.WHITE};
      border: 2px solid ${Colors.PRIMARY['500']};
    }
  `}
`;

const Step = ({ title, status, icon }) => (
  <ProgressStep status={status}>
    <p>{ title }</p>
    { icon && <StepIcon status={status} name={icon} /> }
  </ProgressStep>
);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  status: PropTypes.oneOf(['', 'active', 'done']),
};

Step.defaultProps = {
  status: '',
  icon: '',
};

export default Step;
