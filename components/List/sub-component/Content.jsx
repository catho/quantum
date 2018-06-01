import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import SubHeader from './SubHeader';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

class Content extends React.Component {
  render() {
    const { header, subheader } = this.props;

    console.log(this.props);

    return (
      <ContentBox>
        <Header>{header}</Header>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </ContentBox>
    );
  }
}

Content.defaultProps = {
  subheader: '',
};

Content.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

export default Content;
