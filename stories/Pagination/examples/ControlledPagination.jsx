import React, { Component } from 'react';
import { Pagination } from '../../../components';

class ControlledPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      totalPages: 20,
    };
  }

  handleClick = nextPage => {
    this.setState({ activePage: nextPage });
  };

  render() {
    const { activePage, totalPages } = this.state;
    return (
      <Pagination
        ariaLabel="Records pagination"
        activePageAriaLabel="Current record page"
        pageAriaLabel="Record page"
        prevButtonText="Previous page"
        nextButtonText="Next page"
        totalPages={totalPages}
        activePage={activePage}
        onClick={this.handleClick}
      />
    );
  }
}

ControlledPagination.code = `import React, { Component } from 'react';
import { Pagination } from '@catho/quantum';

class ControlledPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      totalPages: 20,
    };
  }

  handleClick = nextPage => {
    this.setState({ activePage: nextPage });
  };

  render() {
    const { activePage, totalPages } = this.state;
    return (
      <Pagination
        ariaLabel="Records pagination"
        activePageAriaLabel="Current record page"
        pageAriaLabel="Record page"
        prevButtonText="Previous page"
        nextButtonText="Next page"
        totalPages={totalPages}
        activePage={activePage}
        onClick={this.handleClick}
      />
    );
  }
}
`;

export default ControlledPagination;
