import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../Icon';
import Colors from '../../Colors';
import { BREAKPOINTS } from '../../Grid/sub-components';

const statusFontColor = ({ status }) => {
  const statusColors = {
    normal: Colors.GREY['100'],
    active: Colors.WHITE,
    done: Colors.PRIMARY['500'],
  };

  return `color: ${statusColors[status] || statusColors.normal};`;
};

const statusStepColor = ({ status }) => {
  const stepColors = {
    normal: `
      color: ${Colors.GREY['400']};

      &:after {
        background-color: ${Colors.GREY['100']};
      }

      &:before {
        background-color: ${Colors.WHITE};
        border: 2px solid ${Colors.GREY['100']};
      }
    `,
    active: `
      color: ${Colors.PRIMARY['500']};

      &:after {
        background-color: ${Colors.PRIMARY['500']};
      }

      &:before {
        background-color: ${Colors.PRIMARY['500']};
        border: 2px solid ${Colors.PRIMARY['500']};
      }
    `,
    done: `
      color: ${Colors.GREY['400']};

      &:after {
        background-color: ${Colors.PRIMARY['500']};
      }

      &:before {
        background-color: ${Colors.WHITE};
        border: 2px solid ${Colors.PRIMARY['500']};
      }
    `,
  };

  return stepColors[status] || stepColors.normal;
};

const StepIcon = styled(Icon)`
  position: relative;
  top: -42px;

  ${statusFontColor}
`;

const ProgressStep = styled.li`
  list-style-type: none;
  flex-grow: 1;
  flex: 1;
  font-size: 12px;
  position: relative;
  text-align: center;
  margin-top: 50px;

  @media (max-width: ${BREAKPOINTS.phone}px) {
    font-size: 10px;
  }

  &:after {
    position: absolute;
    top: 15px;
    left: -50%;
    width: 100%;
    height: 2px;
    content: '';
    z-index: -1;
  }

  &:before {
    width: 36px;
    height: 36px;
    line-height: 30px;
    content: '';
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    border-radius: 50%;
  }

  &:first-child:after {
    content: none;
  }

  ${statusStepColor}
`;

const Title = styled.p`
  position: absolute;
  top: -24px;
  margin: 0 auto;
  padding: 4px;
  overflow: hidden;
  width: 100%;
  word-wrap: break-word;

  @media (min-width: ${BREAKPOINTS.phone + 1}px) and (max-width: ${BREAKPOINTS.tablet}px) {
    top: -34px;
  }
  @media (max-width: ${BREAKPOINTS.phone}px) {
    top: -30px;
  }
`;

const statusTypes = ['', 'active', 'done'];

const Step = ({ title, status, icon }) => (
  <ProgressStep status={status}>
    <Title>{ title }</Title>
    { icon && <StepIcon status={status} name={icon} /> }
  </ProgressStep>
);

Step.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  icon: PropTypes.string,
  status: PropTypes.oneOf(statusTypes),
};

Step.defaultProps = {
  status: '',
  icon: '',
};

StepIcon.propTypes = {
  status: PropTypes.oneOf(statusTypes),
};

export default Step;
