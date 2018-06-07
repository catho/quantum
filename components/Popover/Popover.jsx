import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';
import Ribbon from '../Ribbon';
import mixins from './mixins';

const PADDING = '18px 24px';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2),
              0 8px 14px 3px rgba(0, 0, 0, 0.12),
              0 8px 10px 1px rgba(0, 0, 0, 0.14);
  position: absolute;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    ${mixins.arrow};
  }

  ${mixins.position}
  ${mixins.visibility}
  ${mixins.skin}
  ${mixins.shadow}
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${mixins.justifyTitle};
  padding: ${PADDING};

  ${mixins.title};
`;

const Content = styled.div`
  padding: ${PADDING};

  ${mixins.ribbonPadding}
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
`;

const ChildrenContainer = styled.div``;

class Popover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      popoverMeasures: {
        width: null,
        height: null,
      },
      childrenMeasures: {
        width: null,
        height: null,
      },
    };
  }

  componentDidMount() {
    this.measure();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.title !== nextProps.title ||
      this.props.content !== nextProps.content ||
      this.props.place !== nextProps.place ||
      this.props.show !== nextProps.show ||
      this.state.ribbon !== nextState.ribbon ||
      this.state.show !== nextState.show ||
      this.state.popoverMeasures.width !== nextState.popoverMeasures.width ||
      this.state.popoverMeasures.height !== nextState.popoverMeasures.height ||
      this.state.childrenMeasures.width !== nextState.childrenMeasures.width ||
      this.state.childrenMeasures.height !== nextState.childrenMeasures.height
    );
  }

  componentDidUpdate() {
    this.measure();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  measure() {
    const { clientWidth: popoverWidth, clientHeight: popoverHeight } = this.popoverRef;
    const { clientWidth: childrenWidth, clientHeight: childrenHeight } = this.childrenRef;

    this.setState({
      popoverMeasures: {
        width: popoverWidth,
        height: popoverHeight,
      },
      childrenMeasures: {
        width: childrenWidth,
        height: childrenHeight,
      },
    });
  }

  toggleVisibility = (event) => {
    event.preventDefault();

    this.setState(({ show }) => ({
      show: !show,
    }));
  }

  hide = () => {
    this.setState({ show: false });
  }

  handleClickOutside = ({ target }) => {
    if (!this.wrapperRef.contains(target)) this.hide();
  }

  render() {
    const {
      title, content, children, closeTitle, ribbon, ...rest
    } = this.props;

    const {
      show,
      popoverMeasures: {
        width: popoverWidth,
        height: popoverHeight,
      },
      childrenMeasures: {
        width: childrenWidth,
        height: childrenHeight,
      },
    } = this.state;

    const measures = {
      popoverWidth, popoverHeight, childrenWidth, childrenHeight,
    };

    return (
      <Wrapper innerRef={(ref) => { this.wrapperRef = ref; }}>
        <PopoverContainer
          {...rest}
          {...measures}
          show={show}
          innerRef={(ref) => { this.popoverRef = ref; }}
        >
          {ribbon && <Ribbon text={ribbon} />}

          <Header title={title}>
            { title && <span>{ title }</span> }
            <CloseIcon name="close" onClick={this.hide} title={closeTitle} />
          </Header>

          <Content ribbon={ribbon}>
            { content }
          </Content>
        </PopoverContainer>

        <ChildrenContainer
          onClick={this.toggleVisibility}
          innerRef={(ref) => { this.childrenRef = ref; }}
        >
          { children }
        </ChildrenContainer>
      </Wrapper>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string,
  closeTitle: PropTypes.string,
  ribbon: PropTypes.string,
  skin: PropTypes.oneOf(['default', 'p2p']),
  place: PropTypes.oneOf([
    'top',
    'top-right',
    'top-left',
    'right',
    'left',
  ]),
  show: PropTypes.bool,
  content: PropTypes.node,
  children: PropTypes.node,
};

Popover.defaultProps = {
  title: '',
  closeTitle: '',
  ribbon: '',
  skin: 'default',
  place: 'top',
  show: false,
  content: '',
  children: '',
};

export default Popover;
