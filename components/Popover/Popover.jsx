import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Icon from '../Icon';
import Button from '../Button';

const padding = '18px 24px';

const arrowSize = '8px';
const cornerArrowDistance = 25;
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
      top: `top: -${popoverHeight + 20}px; left: 50%; margin-left: -${Math.floor(popoverWidth / 2)}px;`,
      right: `right: -${popoverWidth + 25}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      left: `left: -${popoverWidth + 25}px; top: 50%; margin-top: -${Math.floor(popoverHeight / 2)}px;`,
      'top-left': `top: -${popoverHeight + 20}px; left: ${Math.floor(childrenWidth / 2) + cornerArrowDistance}px; margin-left: -${popoverWidth}px;`,
      'top-right': `top: -${popoverHeight + 20}px; left: -${Math.floor(childrenWidth / 2) + cornerArrowDistance}px; margin-left: 100%;`,
    };

    return position[place] || position.top;
  },
};

const Wrapper = styled.div`
  position: relative;
`;

const PopoverContainer = styled.div`
  background-color: ${Colors.WHITE};
  border-color: ${Colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2),
              0 8px 14px 3px rgba(0, 0, 0, 0.12),
              0 8px 10px 1px rgba(0, 0, 0, 0.14);

  cursor: default;
  position: absolute;
  z-index: 100;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;

  ${placement.popoverPosition}

  &:before {
    content: '';
    position: absolute;
    ${({ place }) => placement.arrowPosition[place]};
  }
`;

const Title = styled.div`
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

const ChildrenContainer = styled.div`
  cursor: pointer;
`;

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
    this.measure();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.title !== nextProps.title ||
      this.props.content !== nextProps.content ||
      this.props.place !== nextProps.place ||
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

  hide = () => {
    this.setState({ show: false });
  }

  render() {
    const {
      title, content, children, place, closeTitle,
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

    return (
      <Wrapper>
        <PopoverContainer
          place={place}
          popoverWidth={popoverWidth}
          popoverHeight={popoverHeight}
          childrenWidth={childrenWidth}
          childrenHeight={childrenHeight}
          show={show}
          innerRef={(domElement) => { this.popoverRef = domElement; }}
        >
          <Title title={title}>
            { title && <span>{ title }</span> }
            <CloseIcon name="close" onClick={this.hide} title={closeTitle} />
          </Title>

          <Content>{ content }</Content>
        </PopoverContainer>

        <ChildrenContainer
          onClick={this.toggleVisibility}
          innerRef={(domElement) => { this.childrenRef = domElement; }}
        >
          { children }
        </ChildrenContainer>
      </Wrapper>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string,
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
};

Popover.defaultProps = {
  title: 'Title',
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
};

export default Popover;
