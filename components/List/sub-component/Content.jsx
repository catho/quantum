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
  _renderContent = (content) => {
    if (typeof content === 'string') {
      return <Header>{content}</Header>;
    }

    const {
      header = this.props.header,
      subheader = this.props.subheader,
    } = content;

    return (
      <React.Fragment>
        <Header>{header}</Header>

        {subheader && <SubHeader>{subheader}</SubHeader>}
      </React.Fragment>
    );
  };

  render() {
    const { content, children } = this.props;

    return (
      <ContentBox>
        {children || this._renderContent(content)}
      </ContentBox>
    );
  }
}

Content.defaultProps = {
  subheader: '',
  header: '',
  content: {},
  children: null,
};

Content.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      header: PropTypes.string,
      subheader: PropTypes.string,
    }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Content;
