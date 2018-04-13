import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import React from 'react';

import GlobalTheme from '../../theme';
import ComponentTheme from './ComponentTheme';

/** A Dropdown component that alerts user of something */
class Dropdown extends React.Component {
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

    const drop = this.state.show ? (
      <ThemeProvider theme={GlobalTheme}>
        <DropdownWrapper type={type}>
          <DropdownIcon />

          <DropdownMessage>
            <strong>
              {title}
            </strong>

            {text}
          </DropdownMessage>

          <DropdownClose onClick={this.hideModal}><span aria-hidden="true">×</span></DropdownClose>
        </DropdownWrapper>
      </ThemeProvider>
    ) : null;

    return drop;
  }
}

const DropdownWrapper = styled.div`
  ${props => ComponentTheme[props.type]}
  padding: ${props => props.theme.sizes.spacing};
  border-radius: ${props => props.theme.sizes.radius};
  position: relative;
`;

const DropdownIcon = styled.div`
`;

const DropdownMessage = styled.div`
  strong {
    display: ${props => (props.inline ? 'block' : 'inline-block')};
    margin-right: 5px;
  }
  margin-right: 15px;
`;

const DropdownClose = styled.button`
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

Dropdown.defaultProps = {
  show: true,
  duration: 0,
  message: {
    title: 'Sample', text: 'This is a dummy', type: 'info',
  },
  inline: true,
  onClose: () => {},
};

Dropdown.propTypes = {
  /** it says to component if it should appear or not */
  show: PropTypes.bool,
  /** time in seconds that Dropdown is visible */
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

export default Dropdown;
