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
  constructor(props){
    super();

    this.state = props.component.defaultProps;
  }

  handleChange = (name, e) => {
    const { target } = e;
    const { value, type } = target;

    let newValue;

    switch(type){
      case 'checkbox':
        newValue = Boolean(target.checked);
        break;
      case 'number':
        newValue = Number(value);
        break;

      case 'text':
        newValue = value;
        break;

      case 'select-one':
        newValue = isNaN(value) ? value : Number(value);
        break;

      default:
        newValue = undefined;
    }

    this.setState({ [name]: newValue });
  }

  renderComponentByType = (propName, { name, value }) => {

    switch(name){
      case 'enum':
      console.log(name, value)
        return (<select value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}>
          { value.map(v => {
            const str = removeQuotes(v.value);
            return <option value={str}>{str}</option>
          })}
        </select>)
      case 'bool':
        return <input type="checkbox" checked={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
      case 'number':
        return <input type="number" value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
      case 'string':
        return <input type="text" value={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>

      default:
        return 'Not implemented'
    }
  };

  render() {
    const { component: Component } = this.props;
    return (
      <React.Fragment>
        <h2>Preview</h2>
        <Preview>
          <Component {...this.state}/>
        </Preview>
      </React.Fragment>
    )
  }
}

export default LivePreview;
