import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Colors from '../../../components/Colors';
import CodeExample from '../CodeExample';

const Small = styled.small`
  color: ${Colors.SECONDARY['700']};
  cursor: pointer;
  text-transform: lowercase;
`;

const Code = styled.div`
  margin-bottom: 20px;
`;

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { component: Component, title, importModules, code } = this.props;
    const { show } = this.state;

    return (
      <React.Fragment>
        <h3>
          {title}{' '}
          <Small onClick={this.handleClick}>
            {show ? 'Hide' : 'Show'} code
          </Small>
        </h3>

        <Code>
          {show && (
            <CodeExample
              code={code}
              withImport={importModules}
              showTitle={false}
              component={Component}
            />
          )}
        </Code>

        {Component}
      </React.Fragment>
    );
  }
}

Example.defaultProps = {
  code: '',
  title: '',
  importModules: '',
  component: {},
};

Example.propTypes = {
  code: PropTypes.string,
  component: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  importModules: PropTypes.string,
};

export default Example;
