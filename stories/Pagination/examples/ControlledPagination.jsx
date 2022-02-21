import { Component } from 'react';
import { Pagination } from '../../../components';

class ControlledPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      totalPages: 10,
    };
  }

  handleClick = (nextPage, event) => {
    console.log(event.target);
    this.setState({ activePage: nextPage });
  };

  render() {
    const { activePage, totalPages } = this.state;
    return (
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        onPageClick={this.handleClick}
      />
    );
  }
}

ControlledPagination.code = `import { Component } from 'react';
import { Pagination } from '@catho/quantum';

class ControlledPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      totalPages: 10,
    };
  }

  handleClick = (nextPage, event) => {
    console.log(event);
    this.setState({ activePage: nextPage });
  };

  render() {
    const { activePage, totalPages } = this.state;
    return (
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        onPageClick={this.handleClick}
      />
    );
  }
}
`;

export default ControlledPagination;
