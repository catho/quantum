import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

import GlobalTheme from '../../theme';
import ComponentTheme from './ComponentTheme';

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
    const { message: { title, text, type } } = this.props;

    const notification = this.state.show ? (
      <ThemeProvider theme={GlobalTheme}>
        <NotificationWrapper type={type}>
          <NotificationIcon />

          <NotificationMessage>
            <strong>
              {title}
            </strong>

            {text}
          </NotificationMessage>

          <NotificationClose onClick={this.hideModal}><span aria-hidden="true">×</span></NotificationClose>
        </NotificationWrapper>
      </ThemeProvider>
    ) : null;

    return notification;
  }
}

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
    display: ${props => (props.inline ? 'block' : 'inline-block')};
    margin-right: 5px;
  }
  margin-right: 15px;
`;

const NotificationClose = styled.button`
    position: absolute;
    cursor: pointer;
    top: 12px;
    right: 0;
    padding: 0.75rem 1.25rem;
    color: inherit;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
`;

Notification.defaultProps = {
  show: true,
  duration: 0,
  message: {
    title: 'Sample', text: 'This is a dummy', type: 'info',
  },
  inline: true,
  onClose: () => {},
};

Notification.propTypes = {
  /** it says to component if it should appear or not */
  show: PropTypes.bool,
  /** time in seconds that notification is visible */
  duration: PropTypes.number,
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
  /** it says if the title should stay in the same line of the message itself */
  inline: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  /** callback function */
  onClose: PropTypes.func,
};

export default Notification;
