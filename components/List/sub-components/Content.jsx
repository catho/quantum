import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import SubHeader from './SubHeader';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

ContentBox.displayName = 'Content';

class Content extends React.Component {
  _renderContent = content => {
    const { header: propsHeader, subheader: propsSubHeader } = this.props;

    if (typeof content === 'string') {
      return <Header>{content}</Header>;
    }

    const { header = propsHeader, subheader = propsSubHeader } = content;

    return (
      <>
        <Header>{header}</Header>

        {subheader && <SubHeader>{subheader}</SubHeader>}
      </>
    );
  };

  render() {
    const { content, children } = this.props;

    return <ContentBox>{children || this._renderContent(content)}</ContentBox>;
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

Content.displayName = 'List.Content';

export default Content;
