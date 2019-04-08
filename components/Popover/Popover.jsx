import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

class Popover extends Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return <Wrapper>{children}</Wrapper>;
  }
}

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Popover;
