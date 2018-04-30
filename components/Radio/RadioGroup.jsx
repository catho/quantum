import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup } from '../shared';

const Group = styled(FieldGroup)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
  }

  ${props => props.inline && `
    align-items: unset;
    flex-direction: unset;
  `}
`;

class RadioGroup extends React.Component {
  constructor(props){
    super();
    this.state = {}
  }

  handleChange = (e,  value) => this.setState(value);

  render(){
    const {children} = this.props;
    return (
      <Group>
        {
          children.map(({ type: Component, props }, index) => {
            return(
              <Component key={index} {...props} onChange={this.handleChange}/>
            )
          })
        }
      </Group>
    )
  }
}

/**
 * Group for Radio components.
 */

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
