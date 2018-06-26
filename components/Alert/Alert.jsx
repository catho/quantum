import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import React, { Component } from 'react';
import Icon from '../Icon';
import Colors from '../Colors';

import GlobalTheme from '../../theme';
import ComponentTheme from './ComponentTheme';

const sharedStyles = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const AlertWrapper = styled.div`
  background-color: ${props => ComponentTheme[props.type].backgroundColor};
  border-radius: 2px;
  color: ${props => ComponentTheme[props.type].color};
  padding: 12px;
  position: relative;
  ${GlobalTheme.mixins.shadow(2)}
`;

const AlertIcon = styled(Icon)`
  ${sharedStyles}
  left: 12px;
`;

const AlertMessage = styled.div`
  display: inline-block;
  margin-left: 35px;
  margin-right: 35px;
`;

const AlertTitle = styled.strong`
  display: block;
`;

const AlertClose = styled(Icon)`
  && {
    ${sharedStyles}
    background-color: ${GlobalTheme.mixins.hexToRgba(Colors.WHITE, 0.5)};
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    height: 17px;
    line-height: 17px;
    right: 12px;
    text-align: center;
    width: 17px;
  }
`;

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
    };

    if (this.props.duration) {
      this.handleAutoDestruction();
    }
  }

  hideModal = () => {
    this.setState({ show: false }, this.props.onClose ? this.props.onClose() : null);
  }

  handleAutoDestruction = () => {
    setTimeout(() => {
      this.hideModal();
    }, this.props.duration * 1000);
  }

  render() {
    const { type, message: { title, text } } = this.props;

    return this.state.show ? (
      <ThemeProvider theme={GlobalTheme}>
        <AlertWrapper type={type}>
          <AlertIcon name={ComponentTheme[type].icon} />

          <AlertMessage>
            <AlertTitle>
              {title}
            </AlertTitle>

            {text}
          </AlertMessage>

          <AlertClose title="Fechar" skin={ComponentTheme[type].backgroundColor} name="close" onClick={this.hideModal} />
        </AlertWrapper>
      </ThemeProvider>
    ) : null;
  }
}

AlertClose.displayName = 'AlertClose';
Alert.defaultProps = {
  type: 'info',
  message: {
    title: 'Simple',
    text: 'This is a dummy',
  },
  duration: 0,
  show: true,
  onClose: () => {},
};

Alert.propTypes = {
  /** alert type */
  type: PropTypes.oneOf([
    'info',
    'success',
    'warning',
    'error',
  ]),
  /** time in seconds that Alert is visible */
  duration: PropTypes.number,
  /** it says to component if it should appear or not */
  show: PropTypes.bool,
  /** object with message details */
  message: PropTypes.shape({
    /** message title */
    title: PropTypes.string,
    /** message text */
    text: PropTypes.string,
  }),
  /** it says if the title should stay in the same line of the message itself */
  /** callback function */
  onClose: PropTypes.func,
};

export default Alert;
