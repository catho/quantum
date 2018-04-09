import React from 'react';
import styled from 'styled-components';

const Preview = styled.div`
  padding: 60px 20px;
  display: flex;
  justify-content: center;

  border: 1px solid #dee6ed;
  box-shadow: 0 0 10px 2px #e5ebf1 inset;
  background: linear-gradient(45deg, #eff2f6 25%, transparent 25%, transparent 75%, #eff2f6 75%, #eff2f6 0),
              linear-gradient(45deg, #eff2f6 25%, transparent 5%, transparent 75%, #eff2f6 75%, #eff2f6 0), #fff;
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
  background-clip: border-box;
  background-origin: padding-box;
`;

class LivePreview extends React.Component {

  render() {
    const { component } = this.props;
    const Component = component.type;

    return (
      <React.Fragment>
        <h2>Preview</h2>
        <Preview>
          <Component {...component.type.defaultProps}/>
        </Preview>
      </React.Fragment>
    )
  }
}

export default LivePreview;
