import React from 'react';
import styled from 'styled-components';

const removeQuotes = str => str.replace(/\'/g, '');

class AutoProps extends React.Component {
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

    this.setState({ [name]: newValue }, () => {
      this.props.onChange(this.state);
    });

  }

  renderComponentByType = (propName, { name, value }) => {

    switch(name){
      case 'enum':
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
        <h2>Props</h2>
        <table>
          <tbody>
            {
              Component.__docgenInfo &&
              Object
                .entries(Component.__docgenInfo.props)
                .map(([name, value], i) => (
                  <tr>
                    <td>{name}</td>
                    <td>{this.renderComponentByType(name, value.type)}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default AutoProps;
