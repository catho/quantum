import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icon';
import Colors from '../../Colors';

const StepIcon = styled(Icon)`
  position: relative;
  top: -53px;
  color: ${Colors.GREY['100']};
  
  ${({ status }) => status === 'active' && `
    color: ${Colors.WHITE};
  `}
  
  ${({ status }) => status === 'done' && `
    color: ${Colors.PRIMARY['500']};
  `}
`;

const ProgressStep = styled.li`
  list-style-type: none;
  flex-grow: 1;
  font-size: 12px;
  position: relative;
  text-align: center;
  color: ${Colors.GREY['400']};
  margin-top: 50px;

  &:before {
    width: 36px;
    height: 36px;
    content: '';
    line-height: 30px;
    border: 2px solid ${Colors.GREY['100']};
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
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
    position: relative;
    top: -80px;
    margin: 0 auto;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;  
    text-overflow: ellipsis;
    width: 200px;
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
  <React.Fragment>
    <ProgressStep status={status}>
      <p>{ title }</p>
      { icon && <StepIcon status={status} name={icon} /> }
    </ProgressStep>
  </React.Fragment>
);

Step.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  status: PropTypes.string,
};

Step.defaultProps = {
  status: PropTypes.oneOf(['', 'active', 'done']),
  icon: '',
};

export default Step;
