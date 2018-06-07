import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

import GlobalTheme from '../../theme';
import ComponentTheme from './ComponentTheme';

const NotificationWrapper = styled.div`
  ${props => ComponentTheme[props.type]}
  padding: ${props => props.theme.sizes.spacing};
  border-radius: ${props => props.theme.sizes.radius};
  position: relative;
`;

const NotificationIcon = styled.div`
`;

const NotificationMessage = styled.div`
  strong {
    display: ${props => (props.inline ? 'inline-block' : 'block')};
    margin-right: 5px;
  }
  margin-right: 15px;
`;

const NotificationClose = styled.button`
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 0;
    padding: .75rem 1.25rem;
    color: inherit;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
`;

/** A notification component that alerts user of something */
class Notification extends React.Component {
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
    const { message: { title, text, type }, inline } = this.props;

    return this.state.show ? (
      <ThemeProvider theme={GlobalTheme}>
        <NotificationWrapper type={type}>
          <NotificationIcon />

          <NotificationMessage inline={inline}>
            <strong>
              {title}
            </strong>

            {text}
          </NotificationMessage>

          <NotificationClose onClick={this.hideModal}><span aria-hidden="true">×</span></NotificationClose>
        </NotificationWrapper>
      </ThemeProvider>
    ) : null;
  }
}

Notification.defaultProps = {
  message: {
    title: 'Sample', text: 'This is a dummy', type: 'info',
  },
  duration: 0,
  show: true,
  inline: true,
  onClose: () => {},
};

Notification.propTypes = {
  /** object with message details */
  message: PropTypes.shape({
    /** message title */
    title: PropTypes.string,
    /** message text */
    text: PropTypes.string,
    /** message type */
    type: PropTypes.oneOf([
      'default',
      'success',
      'warning',
      'error',
      'info',
    ]),
  }),
  /** time in seconds that notification is visible */
  duration: PropTypes.number,
  /** it says to component if it should appear or not */
  show: PropTypes.bool,
  /** it says if the title should stay in the same line of the message itself */
  inline: PropTypes.bool,
  /** callback function */
  onClose: PropTypes.func,
};

export default Notification;
