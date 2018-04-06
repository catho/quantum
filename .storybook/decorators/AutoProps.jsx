import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../../components/Colors'
import { Checkbox } from 'semantic-ui-react'

const removeQuotes = str => str.replace(/'/g, '');

class AutoProps extends React.Component {
  constructor(props) {
    super(props);

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
      this.props.changeState(this.state);
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
        return <Checkbox toggle checked={this.state[propName]} onChange={(e) => this.handleChange(propName, e)}/>
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
        <PropsTable>
          <PropsTbody>
            {
              Component.__docgenInfo &&
              Object
                .entries(Component.__docgenInfo.props)
                .map(([name, value], i) => (
                  <PropsTableRow>
                    <PropsTableData>
                    <CodeBlock>
                      {name}
                    </CodeBlock>
                    </PropsTableData>
                    <PropsTableData>{this.renderComponentByType(name, value.type)}</PropsTableData>
                  </PropsTableRow>
                ))
            }
          </PropsTbody>
        </PropsTable>
      </React.Fragment>
    )
  }
}

const CodeBlock = styled.pre`
  background-color: ${ColorPalette.NEUTRAL.GRAY.WHITE};
  border-radius: 3px;
  display: inline-block;
  font-size: 85%;
  margin-top: 0;
  padding:2px 5px;
`

const PropsTable = styled.table`
`

const PropsTbody = styled.tbody`
`

const PropsTableRow = styled.tr`
  padding: 15px;
  &:nth-child(even) {
    background: #f6f8fa
  }
  &:nth-child(odd) {
    background: #FFF
  }
`

const PropsTableData = styled.td`
  padding: 15px;
  border: 0;
`

export default AutoProps;
