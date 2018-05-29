import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../Colors';
import Icon from '../Icon';

const padding = '18px 24px';

const arrowSize = '8px';
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
  },

  tipPosition: ({ place, height, width }) => {
    const position = {
      top: `top: -${height + 20}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      right: `right: -${width + 25}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
      bottom: `bottom: -${height + 20}px; left: 50%; margin-left: -${Math.floor(width / 2)}px;`,
      left: `left: -${width + 25}px;top: 50%; margin-top: -${Math.floor(height / 2)}px;`,
    };

    return position[place] || position.top;
  },
};

const Wrapper = styled.div`
  position: relative;
`;

const PopoverWrapper = styled.div`
  background-color: ${Colors.WHITE};
  border-color: ${Colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2),
              0 8px 14px 3px rgba(0, 0, 0, 0.12),
              0 8px 10px 1px rgba(0, 0, 0, 0.14);

  cursor: default;
  height: 300px;
  position: absolute;
  width: 300px;
  z-index: 100;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  ${placement.tipPosition}

  &:before {
    content: '';
    position: absolute;
    ${({ place }) => placement.arrowPosition[place]};
  }
`;

const Title = styled.div`
  align-items: center;
  border-bottom: 1px solid ${Colors.GREY['50']};
  display: flex;
  justify-content: space-between;
  padding: ${padding};
`;

const Content = styled.div`
  padding: ${padding};
`;

const CloseIcon = styled(Icon)`
  cursor: pointer;
`;

const ChildrenWrapper = styled.div`
  cursor: pointer;
`;

class Popover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      width: null,
      height: null,
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
      this.state.width !== nextState.width ||
      this.state.height !== nextState.height
    );
  }

  componentDidUpdate() {
    this.measure();
  }

  measure() {
    const { clientWidth: width, clientHeight: height } = this.popover;

    this.setState({ width, height });
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

  render() {
    const {
      title, content, children, place,
    } = this.props;

    const { width, height, show } = this.state;

    return (
      <Wrapper>
        <PopoverWrapper
          place={place}
          width={width}
          height={height}
          show={show}
          innerRef={(domElement) => { this.popover = domElement; }}
        >
          <Title>
            <span>{ title }</span>
            <CloseIcon name="close" onClick={this.hide} />
          </Title>
          <Content>
            { content }
          </Content>
        </PopoverWrapper>
        <ChildrenWrapper onClick={this.toggleVisibility}>
          { children }
        </ChildrenWrapper>
      </Wrapper>
    );
  }
}

Popover.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
  place: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
  ]),
};

Popover.defaultProps = {
  title: 'Title',
  content: 'Content',
  children: 'Click me',
  place: 'top',
};

export default Popover;
