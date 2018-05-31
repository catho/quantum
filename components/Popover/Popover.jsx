import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Icon from '../Icon';
import Button from '../Button';

const padding = '18px 24px';
const arrowSize = '8px';
const cornerArrowDistance = 25;

const skins = {
  p2p: Colors.P2P['500'],
};

const upDownBorders = `
  border-left: ${arrowSize} solid transparent;
  border-right: ${arrowSize} solid transparent;
  left: 50%;
  transform: translateX(-50%);
`;

const sideBorders = `
  border-top: ${arrowSize} solid transparent;
  border-bottom: ${arrowSize} solid transparent;
  top: 50%;
  transform: translateY(-50%);
`;

const placement = {
  arrowPosition: {
    bottom: `
      ${upDownBorders}
      border-bottom: ${arrowSize} solid;
      border-bottom-color: inherit;
      top: -${arrowSize};
    `,
    top: `
      ${upDownBorders}
      border-top: ${arrowSize} solid;
      border-top-color: inherit;
      bottom: -${arrowSize};
    `,
    left: `
      ${sideBorders}
      border-left: ${arrowSize} solid;
      border-left-color: inherit;
      right: -${arrowSize};
    `,
    right: `
      ${sideBorders}
      border-right: ${arrowSize} solid;
      border-right-color: inherit;
      left: -${arrowSize};
    `,
    'top-left': `
      ${upDownBorders}
      border-top: ${arrowSize} solid;
      border-top-color: inherit;
      bottom: -${arrowSize};

      right: ${cornerArrowDistance}px;
      transform: translateX(50%);
      left: auto;
    `,
    'top-right': `
      ${upDownBorders}
      border-top: ${arrowSize} solid;
      border-top-color: inherit;
      bottom: -${arrowSize};

      left: ${cornerArrowDistance}px;
      transform: translateX(-50%);
    `,
  },

  popoverPosition: ({
    place, popoverHeight, popoverWidth, childrenWidth,
  }) => {
    const position = {
      top: `top: -${popoverHeight + 15}px; left: 50%; margin-left: -${Math.floor(popoverWidth / 2)}px;`,
      right: `right: -${popoverWidth + 15}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      left: `left: -${popoverWidth + 15}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      'top-left': `top: -${popoverHeight + 15}px; left: ${Math.floor(childrenWidth / 2) + cornerArrowDistance}px; margin-left: -${popoverWidth}px;`,
      'top-right': `top: -${popoverHeight + 15}px; left: -${Math.floor(childrenWidth / 2) + cornerArrowDistance}px; margin-left: 100%;`,
    };

    return position[place] || position.top;
  },
};

const Wrapper = styled.div`
  position: relative;
`;

const PopoverContainer = styled.div`
  border-radius: 8px;
  cursor: default;
  opacity: ${({ show }) => (show ? '1' : '0')};
  position: absolute;
  transition: opacity 0.2s ease-in-out;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    ${({ place }) => placement.arrowPosition[place]};
  }

  ${({ skin }) => (
    skins[skin]
      ? `
        border-color: ${skins[skin]};
        background-color: ${skins[skin]};
        color: ${Colors.WHITE};
      `
      : `
        border-color: ${Colors.WHITE};
        background-color: ${Colors.WHITE};
      `
  )}

  ${({ place }) => {
    if (place.indexOf('top') > -1) {
      return `box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2),
              0 8px 14px 3px rgba(0, 0, 0, 0.12),
              0 8px 10px 1px rgba(0, 0, 0, 0.14);`;
    }

    if (place === 'right') {
      return `box-shadow: -3px 0 3px 0 rgba(0, 0, 0, 0.2),
              -6px 0 14px 3px rgba(0, 0, 0, 0.12),
              -6px 0 10px 1px rgba(0, 0, 0, 0.14);`;
    }

    return `box-shadow: 3px 0 3px 0 rgba(0, 0, 0, 0.2),
            6px 0 14px 3px rgba(0, 0, 0, 0.12),
            6px 0 10px 1px rgba(0, 0, 0, 0.14);`;
  }}

  ${placement.popoverPosition}
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: ${({ title }) => (title ? 'space-between' : 'flex-end')};
  padding: ${padding};

  ${({ title }) => (title
    ? `border-bottom: 1px solid ${Colors.GREY['50']};`
    : 'padding-bottom: 0;'
  )};
`;

const Content = styled.div`
  padding: ${padding};
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
`;

const ChildrenContainer = styled.div``;

class Popover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
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
    const { trigger } = this.props;

    this.measure();

    if (trigger === 'click') {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.title !== nextProps.title ||
      this.props.content !== nextProps.content ||
      this.props.place !== nextProps.place ||
      this.props.trigger !== nextProps.trigger ||
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

    const { show } = this.state;

    this.setState({ show: !show });
  }

  show = () => {
    this.setState({ show: true });
  }

  hide = () => {
    this.setState({ show: false });
  }

  handleClickOutside = ({ target }) => {
    if (!this.wrapperRef.contains(target)) this.hide();
  }

  render() {
    const {
      title, content, children, closeTitle, trigger,
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
          {...this.props}
          {...measures}
          show={show}
          innerRef={(ref) => { this.popoverRef = ref; }}
        >
          <Header title={title}>
            { title && <span>{ title }</span> }
            <CloseIcon name="close" onClick={this.hide} title={closeTitle} />
          </Header>

          <Content>{ content }</Content>
        </PopoverContainer>

        <ChildrenContainer
          onClick={trigger === 'click' ? this.toggleVisibility : () => {}}
          onMouseEnter={trigger === 'hover' ? this.show : () => {}}
          onMouseLeave={trigger === 'hover' ? this.hide : () => {}}
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
  stamp: PropTypes.string,
  content: PropTypes.node,
  children: PropTypes.node,
  closeTitle: PropTypes.string,
  place: PropTypes.oneOf([
    'top',
    'top-right',
    'top-left',
    'right',
    'left',
  ]),
  trigger: PropTypes.oneOf(['click', 'hover']),
  skin: PropTypes.oneOf(['default', 'p2p']),
};

Popover.defaultProps = {
  title: '',
  stamp: '',
  content: (
    <React.Fragment>
      <div style={{ width: '300px' }}>Content</div>
      <div style={{ width: '300px' }}>Content</div>
      <div style={{ width: '300px' }}>Content</div>
      <div style={{ width: '300px' }}>Content</div>
      <div style={{ width: '300px' }}>Content</div>
      <div style={{ width: '300px' }}>Content</div>
    </React.Fragment>
  ),
  children: <Button size="big">123456789</Button>,
  place: 'top',
  closeTitle: 'Fechar',
  trigger: 'click',
  skin: 'default',
};

export default Popover;
